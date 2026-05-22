#!/usr/bin/env node

/**
 * build-iconify.js
 *
 * Generates a standards-compliant Iconify JSON collection file from the
 * SVG assets in the /assets directory.
 *
 * Output: dist/ginetex.json
 *
 * Iconify JSON spec:
 *   https://iconify.design/docs/types/iconify-json.html
 *
 * Usage:
 *   node scripts/build-iconify.js
 *   node scripts/build-iconify.js --pretty   (human-readable output)
 *   node scripts/build-iconify.js --validate  (validate only, no output)
 */

'use strict';

const fs = require('fs');
const path = require('path');

// ─── Configuration ────────────────────────────────────────────────────────────

const CONFIG = {
  prefix: 'ginetex',
  assetsDir: path.resolve(__dirname, '../assets'),
  outputDir: path.resolve(__dirname, '../dist'),
  outputFile: 'ginetex.json',
  defaultWidth: 24,
  defaultHeight: 24
};

/** Maps folder names → Iconify category labels */
const CATEGORY_LABELS = {
  washing: 'Washing',
  bleaching: 'Bleaching',
  drying: 'Drying',
  ironing: 'Ironing',
  'professional-care': 'Professional Care'
};

// ─── SVG Parsing Helpers ──────────────────────────────────────────────────────

/**
 * Scopes all inline IDs within an SVG body to a unique prefix so that
 * multiple instances of the same icon on a page never share an ID.
 *
 * Iconify recommends this pattern for icons that use <clipPath>, <mask>,
 * <filter>, <linearGradient>, etc.
 *
 * Strategy: replace every id="foo" and every url(#foo) / href="#foo"
 * reference with id="<prefix>-foo" so they remain internally consistent
 * but globally unique per icon.
 *
 * @param {string} body  - SVG inner body
 * @param {string} scope - Unique scope string (e.g. the icon name)
 * @returns {string} Body with scoped IDs
 */
function scopeIDs(body, scope) {
  // Collect all defined IDs
  const idPattern = /\bid="([^"]+)"/g;
  const ids = new Set();
  let m;
  while ((m = idPattern.exec(body)) !== null) {
    ids.add(m[1]);
  }

  if (ids.size === 0) return body;

  // Build a safe scope key: replace non-alphanumeric chars with dashes
  const safeScope = scope.replace(/[^a-z0-9]/gi, '-');

  let scoped = body;
  for (const id of ids) {
    const newId = `${safeScope}-${id}`;
    // Replace id="<id>"
    scoped = scoped.replace(new RegExp(`\\bid="${id}"`, 'g'), `id="${newId}"`);
    // Replace url(#<id>)
    scoped = scoped.replace(new RegExp(`url\\(#${id}\\)`, 'g'), `url(#${newId})`);
    // Replace href="#<id>" and xlink:href="#<id>"
    scoped = scoped.replace(new RegExp(`href="#${id}"`, 'g'), `href="#${newId}"`);
  }

  return scoped;
}

/**
 * Extracts the inner body of an SVG (everything between <svg …> and </svg>)
 * and strips the outer wrapper so Iconify can inject its own.
 *
 * @param {string} svgContent - Raw SVG file content
 * @param {string} iconName   - Icon name used for ID scoping
 * @returns {{ body: string, width: number, height: number }}
 */
function parseSVG(svgContent, iconName) {
  const normalized = svgContent.trim();

  // Extract viewBox dimensions
  const viewBoxMatch = normalized.match(/viewBox=["']([^"']+)["']/);
  let width = CONFIG.defaultWidth;
  let height = CONFIG.defaultHeight;

  if (viewBoxMatch) {
    const parts = viewBoxMatch[1].trim().split(/\s+/);
    if (parts.length === 4) {
      width = parseFloat(parts[2]) || CONFIG.defaultWidth;
      height = parseFloat(parts[3]) || CONFIG.defaultHeight;
    }
  }

  // Strip the outer <svg …> … </svg> wrapper to get the body
  let body = normalized
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .trim();

  // Scope inline IDs to prevent conflicts when multiple icons are on the page
  body = scopeIDs(body, iconName);

  return { body, width, height };
}

/**
 * Converts a filename (without extension) to an Iconify icon name.
 *
 * Rules:
 *  - Strip the "ginetex--" prefix (our file naming convention)
 *  - Keep everything lowercase with hyphens (already the case)
 *
 * Examples:
 *  ginetex--30c-fine-wash        → 30c-fine-wash
 *  ginetex--do-not-bleach        → do-not-bleach
 *  ginetex--tumble-drying-1      → tumble-drying-1
 *
 * @param {string} filename - Filename without extension
 * @returns {string} Iconify icon name
 */
function toIconName(filename) {
  return filename.replace(/^ginetex--/, '');
}

// ─── Validation ───────────────────────────────────────────────────────────────

/**
 * Validates a single icon entry.
 * Throws if the icon body is empty or malformed.
 *
 * @param {string} name - Icon name
 * @param {{ body: string, width: number, height: number }} icon
 */
function validateIcon(name, icon) {
  if (!icon.body || icon.body.length === 0) {
    throw new Error(`Icon "${name}" has an empty body.`);
  }
  if (icon.width <= 0 || icon.height <= 0) {
    throw new Error(`Icon "${name}" has invalid dimensions: ${icon.width}x${icon.height}.`);
  }
}

// ─── Main Build ───────────────────────────────────────────────────────────────

function build() {
  const args = process.argv.slice(2);
  const pretty = args.includes('--pretty');
  const validateOnly = args.includes('--validate');

  console.log('');
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║   Ginetex → Iconify JSON Builder             ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');

  // ── 1. Discover categories ──────────────────────────────────────────────────
  const categoryDirs = fs
    .readdirSync(CONFIG.assetsDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  if (categoryDirs.length === 0) {
    console.error('✖  No category directories found in:', CONFIG.assetsDir);
    process.exit(1);
  }

  console.log(`📂 Found ${categoryDirs.length} categories: ${categoryDirs.join(', ')}`);
  console.log('');

  // ── 2. Build icons map & categories metadata ────────────────────────────────
  const icons = {};
  const categories = {};
  const errors = [];
  let totalIcons = 0;

  for (const category of categoryDirs) {
    const categoryPath = path.join(CONFIG.assetsDir, category);
    const svgFiles = fs
      .readdirSync(categoryPath)
      .filter(f => f.endsWith('.svg'))
      .sort();

    if (svgFiles.length === 0) {
      console.warn(`  ⚠  Category "${category}" has no SVG files - skipping.`);
      continue;
    }

    const categoryIconNames = [];
    const label = CATEGORY_LABELS[category] || category;

    console.log(`  📁 ${label} (${svgFiles.length} icons)`);

    for (const file of svgFiles) {
      const filePath = path.join(categoryPath, file);
      const iconName = toIconName(path.basename(file, '.svg'));

      try {
        const svgContent = fs.readFileSync(filePath, 'utf-8');
        const { body, width, height } = parseSVG(svgContent, iconName);

        const iconEntry = { body };

        // Only include dimensions if they differ from the collection default
        if (width !== CONFIG.defaultWidth) iconEntry.width = width;
        if (height !== CONFIG.defaultHeight) iconEntry.height = height;

        validateIcon(iconName, { body, width, height });

        icons[iconName] = iconEntry;
        categoryIconNames.push(iconName);
        totalIcons++;

        console.log(`     ✓ ${iconName}`);
      } catch (err) {
        errors.push({ file: filePath, message: err.message });
        console.error(`     ✖ ${iconName}: ${err.message}`);
      }
    }

    if (categoryIconNames.length > 0) {
      categories[label] = categoryIconNames;
    }
  }

  console.log('');

  // ── 3. Report errors ────────────────────────────────────────────────────────
  if (errors.length > 0) {
    console.error(`✖  ${errors.length} error(s) encountered. Aborting.`);
    errors.forEach(e => console.error(`   • ${e.file}: ${e.message}`));
    process.exit(1);
  }

  if (totalIcons === 0) {
    console.error('✖  No icons were processed. Aborting.');
    process.exit(1);
  }

  // ── 4. Assemble the Iconify JSON collection ─────────────────────────────────
  const collection = {
    prefix: CONFIG.prefix,

    info: {
      name: 'Ginetex Care Symbols',
      total: totalIcons,
      version: require('../package.json').version,
      author: {
        name: 'YESSIR Organization',
        url: 'https://github.com/yessir-web-tech/ginetex-icons'
      },
      license: {
        title: 'MIT',
        spdx: 'MIT',
        url: 'https://github.com/yessir-web-tech/ginetex-icons/blob/main/LICENSE'
      },
      samples: Object.keys(icons).slice(0, 3),
      height: CONFIG.defaultHeight,
      category: 'General',
      tags: ['textile', 'care', 'laundry', 'washing', 'symbols', 'ginetex']
    },

    // Default dimensions for the entire collection
    width: CONFIG.defaultWidth,
    height: CONFIG.defaultHeight,

    icons,

    // Category groupings (used by Iconify UI for browsing)
    categories
  };

  // ── 5. Validate-only mode ───────────────────────────────────────────────────
  if (validateOnly) {
    console.log(`✔  Validation passed - ${totalIcons} icons are valid.`);
    console.log('   (No output written - remove --validate to generate the file.)');
    return;
  }

  // ── 6. Write output ─────────────────────────────────────────────────────────
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const outputPath = path.join(CONFIG.outputDir, CONFIG.outputFile);
  const json = pretty ? JSON.stringify(collection, null, 2) : JSON.stringify(collection);

  fs.writeFileSync(outputPath, json, 'utf-8');

  const fileSizeKB = (fs.statSync(outputPath).size / 1024).toFixed(1);

  console.log('╔══════════════════════════════════════════════╗');
  console.log('║   Build Complete                             ║');
  console.log('╚══════════════════════════════════════════════╝');
  console.log('');
  console.log(`  📦 Output  : ${outputPath}`);
  console.log(`  🔢 Icons   : ${totalIcons}`);
  console.log(`  📏 Size    : ${fileSizeKB} KB`);
  console.log(`  🏷  Prefix  : ${CONFIG.prefix}`);
  console.log('');
  console.log('  Usage example (Iconify):');
  console.log(`    import collection from './dist/${CONFIG.outputFile}';`);
  console.log(`    addCollection(collection);`);
  console.log(`    // <Icon icon="${CONFIG.prefix}:washing" />`);
  console.log('');
}

build();
