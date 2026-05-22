# API Documentation

## SVGO Class

### Constructor

## Ginetex Care Symbols - Complete Reference

### Overview

This package provides CSS-based access to all Ginetex care symbols. Use the icon classes directly in your HTML with the `gx-` prefix.

### Basic Usage

```html
<!-- Link the CSS -->
<link rel="stylesheet" href="@yessir/ginetex-care-symbols/dist/ginetex-icons.css" />

<!-- Use the icon -->
<span class="gx-icon gx-wash-40c"></span>
```

## Symbol Categories & Classes

### 1. Washing Symbols (14 total)

Temperature-based washing instructions and hand wash options.

| Class               | Description           | Temperature |
| ------------------- | --------------------- | ----------- |
| `gx-wash-30c`       | Permanent press cycle | 30°C        |
| `gx-wash-40c`       | Gentle cycle          | 40°C        |
| `gx-wash-60c`       | Normal cycle          | 60°C        |
| `gx-wash-70c`       | Hot cycle             | 70°C        |
| `gx-wash-95c`       | Very hot cycle / Boil | 95°C        |
| `gx-hand-wash`      | Hand wash only        | Any         |
| `gx-hand-wash-40c`  | Hand wash             | 40°C        |
| `gx-no-wash`        | Do not wash           | -           |
| `gx-mild-wash`      | Mild wash cycle       | Any         |
| `gx-very-mild-wash` | Very mild wash cycle  | Any         |

### 2. Bleaching Symbols (4 total)

Bleach usage instructions.

| Class                   | Description                      |
| ----------------------- | -------------------------------- |
| `gx-bleach-allowed`     | Any bleach allowed               |
| `gx-oxygen-bleach-only` | Oxygen/chlorine-free bleach only |
| `gx-no-bleach`          | Do not bleach                    |
| `gx-bleaching`          | Bleaching process symbol         |

### 3. Drying Symbols (20 total)

Various drying methods and temperatures.

| Class                  | Description              |
| ---------------------- | ------------------------ |
| `gx-tumble-dry`        | Tumble dry (any heat)    |
| `gx-tumble-dry-low`    | Tumble dry - low heat    |
| `gx-tumble-dry-medium` | Tumble dry - medium heat |
| `gx-line-dry`          | Line dry                 |
| `gx-flat-dry`          | Flat dry                 |
| `gx-dry-in-shade`      | Dry in shade             |
| `gx-drip-dry`          | Drip dry                 |
| `gx-natural-dry`       | Natural drying           |
| `gx-normal-drying`     | Normal drying process    |
| `gx-mild-drying`       | Mild drying process      |
| `gx-no-dry-clean`      | Do not dry clean         |

### 4. Ironing Symbols (6 total)

Temperature-based ironing instructions.

| Class              | Description                | Temperature |
| ------------------ | -------------------------- | ----------- |
| `gx-iron-low`      | Iron at low temperature    | Low         |
| `gx-iron-medium`   | Iron at medium temperature | Medium      |
| `gx-iron-high`     | Iron at high temperature   | High        |
| `gx-iron-no-steam` | Iron without steam         | Low         |
| `gx-no-iron`       | Do not iron                | -           |
| `gx-hot-iron`      | Hot iron symbol            | High        |

### 5. Professional Care Symbols (6 total)

Dry cleaning and professional care instructions.

| Class                            | Description                       |
| -------------------------------- | --------------------------------- |
| `gx-dry-clean`                   | Dry clean allowed                 |
| `gx-dry-clean-hydrocarbons`      | Dry clean with hydrocarbons       |
| `gx-professional-wet-clean`      | Professional wet cleaning allowed |
| `gx-mild-professional-wet-clean` | Mild professional wet cleaning    |
| `gx-professional-care`           | Professional care required        |
| `gx-no-dry-clean`                | Do not dry clean                  |

## CSS Integration Examples

### Sizing

```css
.gx-icon {
  font-size: 24px; /* Default size */
}

.care-label .gx-icon {
  font-size: 48px; /* Larger for labels */
}

.badge .gx-icon {
  font-size: 16px; /* Smaller for badges */
}
```

### Coloring

```css
.gx-icon {
  color: #333; /* Dark gray */
}

.gx-icon.warning {
  color: #e74c3c; /* Red for restrictions */
}

.gx-icon.info {
  color: #3498db; /* Blue for instructions */
}
```

## Accessibility Guidelines

Always include proper ARIA labels for screen readers:

```html
<span
  class="gx-icon gx-wash-40c"
  role="img"
  aria-label="Wash at 40 degrees Celsius"
  title="Wash at 40°C"
></span>
```

## Complete HTML Example

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="@yessir/ginetex-care-symbols/dist/ginetex-icons.css" />
    <style>
      .care-label {
        display: flex;
        gap: 20px;
        font-size: 48px;
        padding: 20px;
        background: #f5f5f5;
      }
    </style>
  </head>
  <body>
    <h1>T-Shirt Care Instructions</h1>
    <div class="care-label">
      <span class="gx-icon gx-wash-40c" aria-label="Wash at 40°C"></span>
      <span class="gx-icon gx-bleach-allowed" aria-label="Bleaching allowed"></span>
      <span class="gx-icon gx-tumble-dry" aria-label="Tumble dry"></span>
      <span class="gx-icon gx-iron-medium" aria-label="Iron at medium heat"></span>
    </div>
  </body>
</html>
```

## Browser Support

- Chrome/Chromium 26+
- Firefox 22+
- Safari 5.1+
- Edge 12+
- Opera 15+
- iOS Safari 5.1+
- Android Browser 4.4+

## Font File Details

The following font files are included:

- `ginetex-icons.woff2` (22KB) - Modern browsers - **Recommended**
- `ginetex-icons.woff` (28KB) - Older browsers
- `ginetex-icons.ttf` (64KB) - Desktop applications
- `ginetex-icons.eot` (48KB) - Internet Explorer 8
