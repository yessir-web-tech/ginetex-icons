# Icon Reference Guide

## Ginetex Care Symbols - Complete Reference

### Overview

This package provides direct access to all Ginetex care symbols as SVG files. Use the SVG files in your HTML using `<img>` tags or inline them as needed.

### Basic Usage

```html
<!-- Use the SVG file -->
<img src="node_modules/@yessir/ginetex-icons/assets/washing/wash-40c.svg" alt="Wash at 40°C" />
```

## Symbol Categories & File Names

The SVG files are organized into directories by category.

### 1. Washing Symbols (14 total)

Location: `assets/washing/`

| File Name             | Description           | Temperature |
| --------------------- | --------------------- | ----------- |
| `wash-30c.svg`        | Permanent press cycle | 30°C        |
| `wash-40c.svg`        | Gentle cycle          | 40°C        |
| `wash-60c.svg`        | Normal cycle          | 60°C        |
| `wash-70c.svg`        | Hot cycle             | 70°C        |
| `wash-95c.svg`        | Very hot cycle / Boil | 95°C        |
| `hand-wash.svg`       | Hand wash only        | Any         |
| `hand-wash-40c.svg`   | Hand wash             | 40°C        |
| `no-wash.svg`         | Do not wash           | -           |
| `mild-wash.svg`       | Mild wash cycle       | Any         |
| `very-mild-wash.svg`  | Very mild wash cycle  | Any         |

### 2. Bleaching Symbols (4 total)

Location: `assets/bleaching/`

| File Name                 | Description                      |
| ------------------------- | -------------------------------- |
| `bleach-allowed.svg`      | Any bleach allowed               |
| `oxygen-bleach-only.svg`  | Oxygen/chlorine-free bleach only |
| `no-bleach.svg`           | Do not bleach                    |
| `bleaching.svg`           | Bleaching process symbol         |

### 3. Drying Symbols (20 total)

Location: `assets/drying/`

| File Name                | Description              |
| ------------------------ | ------------------------ |
| `tumble-dry.svg`         | Tumble dry (any heat)    |
| `tumble-dry-low.svg`     | Tumble dry - low heat    |
| `tumble-dry-medium.svg`  | Tumble dry - medium heat |
| `line-dry.svg`           | Line dry                 |
| `flat-dry.svg`           | Flat dry                 |
| `dry-in-shade.svg`       | Dry in shade             |
| `drip-dry.svg`           | Drip dry                 |
| `natural-dry.svg`        | Natural drying           |
| `normal-drying.svg`      | Normal drying process    |
| `mild-drying.svg`        | Mild drying process      |
| `no-dry-clean.svg`       | Do not dry clean         |

### 4. Ironing Symbols (6 total)

Location: `assets/ironing/`

| File Name            | Description                | Temperature |
| -------------------- | -------------------------- | ----------- |
| `iron-low.svg`       | Iron at low temperature    | Low         |
| `iron-medium.svg`    | Iron at medium temperature | Medium      |
| `iron-high.svg`      | Iron at high temperature   | High        |
| `iron-no-steam.svg`  | Iron without steam         | Low         |
| `no-iron.svg`        | Do not iron                | -           |
| `hot-iron.svg`       | Hot iron symbol            | High        |

### 5. Professional Care Symbols (6 total)

Location: `assets/professional-care/`

| File Name                          | Description                       |
| ---------------------------------- | --------------------------------- |
| `dry-clean.svg`                    | Dry clean allowed                 |
| `dry-clean-hydrocarbons.svg`       | Dry clean with hydrocarbons       |
| `professional-wet-clean.svg`       | Professional wet cleaning allowed |
| `mild-professional-wet-clean.svg`  | Mild professional wet cleaning    |
| `professional-care.svg`            | Professional care required        |
| `no-dry-clean.svg`                 | Do not dry clean                  |

## CSS Integration Examples

### Sizing

When using `<img>` tags, size them using CSS `width` and `height`:

```css
.care-icon {
  width: 24px;
  height: 24px;
}

.care-label .care-icon {
  width: 48px;
  height: 48px;
}

.badge .care-icon {
  width: 16px;
  height: 16px;
}
```

## Accessibility Guidelines

Always include proper `alt` attributes for screen readers:

```html
<img
  src="node_modules/@yessir/ginetex-icons/assets/washing/wash-40c.svg"
  alt="Wash at 40 degrees Celsius"
  title="Wash at 40°C"
/>
```

## Complete HTML Example

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .care-label {
        display: flex;
        gap: 20px;
        padding: 20px;
        background: #f5f5f5;
      }
      .care-label img {
        width: 48px;
        height: 48px;
      }
    </style>
  </head>
  <body>
    <h1>T-Shirt Care Instructions</h1>
    <div class="care-label">
      <img src="node_modules/@yessir/ginetex-icons/assets/washing/wash-40c.svg" alt="Wash at 40°C" />
      <img src="node_modules/@yessir/ginetex-icons/assets/bleaching/bleach-allowed.svg" alt="Bleaching allowed" />
      <img src="node_modules/@yessir/ginetex-icons/assets/drying/tumble-dry.svg" alt="Tumble dry" />
      <img src="node_modules/@yessir/ginetex-icons/assets/ironing/iron-medium.svg" alt="Iron at medium heat" />
    </div>
  </body>
</html>
```

## Browser Support

- All modern browsers support SVG images seamlessly.
