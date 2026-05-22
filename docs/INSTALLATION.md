# Installation & Setup Guide

## Requirements

- Node.js >= 14.0.0
- npm or yarn

## Installation

### As a Library

```bash
npm install svgo
```

### Global CLI Installation

```bash
npm install -g svgo
```

### From Source

```bash
git clone https://github.com/yourusername/svgo.git
cd svgo
npm install
npm run build
```

## Getting Started

### Using the JavaScript API

````javascript
const SVGO = require('svgo');

### As a Font Package (Recommended)

```bash
npm install @yessir/ginetex-care-symbols
````

### With Yarn

```bash
yarn add @yessir/ginetex-care-symbols
```

### Using in HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Care Symbols Demo</title>
    <link
      rel="stylesheet"
      href="node_modules/@yessir/ginetex-care-symbols/dist/ginetex-icons.css"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .care-instruction {
        margin: 20px 0;
      }
      .symbols {
        display: flex;
        gap: 20px;
        font-size: 48px;
      }
    </style>
  </head>
  <body>
    <h1>Garment Care Instructions</h1>

    <div class="care-instruction">
      <h2>Regular Cotton Shirt</h2>
      <div class="symbols">
        <span class="gx-icon gx-wash-40c" title="Wash at 40°C"></span>
        <span class="gx-icon gx-bleach-allowed" title="Bleaching allowed"></span>
        <span class="gx-icon gx-tumble-dry" title="Tumble dry"></span>
        <span class="gx-icon gx-iron-medium" title="Iron at medium temperature"></span>
      </div>
    </div>

    <div class="care-instruction">
      <h2>Delicate Fabric</h2>
      <div class="symbols">
        <span class="gx-icon gx-hand-wash-40c" title="Hand wash at 40°C"></span>
        <span class="gx-icon gx-no-bleach" title="Do not bleach"></span>
        <span class="gx-icon gx-line-dry" title="Line dry"></span>
        <span class="gx-icon gx-no-iron" title="Do not iron"></span>
      </div>
    </div>
  </body>
</html>
```

### Using with CSS

```css
/* Import font in your stylesheet */
@import '@yessir/ginetex-care-symbols/dist/ginetex-icons.css';

/* Use in your CSS */
.care-symbol {
  font-family: 'Ginetex Icons';
  display: inline-block;
  font-size: 24px;
  line-height: 1;
}
```

### Using with React

```jsx
import '@yessir/ginetex-care-symbols/dist/ginetex-icons.css';
import React from 'react';

export function CareLabel({ instructions }) {
  return (
    <div className="care-label">
      {instructions.map((icon, idx) => (
        <span key={idx} className={`gx-icon gx-${icon.code}`} title={icon.description} />
      ))}
    </div>
  );
}
```

## Font Files Included

The package includes multiple font formats:

- **ginetex-icons.woff2** - Modern browsers
- **ginetex-icons.woff** - Older browsers
- **ginetex-icons.ttf** - Desktop applications

## Next Steps

- See [API Documentation](./API.md) for complete symbol reference
- Check [Contributing Guide](../CONTRIBUTING.md) to contribute
- Visit [Ginetex](https://www.ginetex.net/) for official symbol definitions
