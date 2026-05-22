#!/usr/bin/env node

/**
 * SVGO CLI - Command line interface for SVG optimization
 */

const fs = require('fs');
const SVGO = require('./index');

/**
 * Parse command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    input: null,
    output: null,
    folder: null
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('-')) {
      const key = args[i].replace(/^--?/, '');
      const value = args[i + 1];

      if (key === 'o' || key === 'output') {
        options.output = value;
        i++;
      } else if (key === 'folder') {
        options.folder = value;
        i++;
      }
    } else if (!options.input) {
      options.input = args[i];
    }
  }

  return options;
}

/**
 * Main CLI function
 */
async function main() {
  const options = parseArgs();

  if (!options.input) {
    console.error('Usage: svgo <input-file> [options]');
    console.error('Options:');
    console.error('  -o, --output <file>    Output file path');
    console.error('  --folder <dir>         Output folder for batch processing');
    process.exit(1);
  }

  try {
    const input = fs.readFileSync(options.input, 'utf-8');
    const svgo = new SVGO();
    const result = await svgo.optimize(input);

    if (result.error) {
      console.error('Error:', result.error);
      process.exit(1);
    }

    const output = options.output || options.input.replace(/\.svg$/, '.min.svg');
    fs.writeFileSync(output, result.data);
    // eslint-disable-next-line no-console
    console.log(`✓ Optimized: ${options.input} → ${output}`);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseArgs, main };
