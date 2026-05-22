# Installation & Setup Guide

## Requirements

- Node.js >= 14.0.0 (if using npm/yarn)
- npm or yarn

## Installation

### As an npm Package

```bash
npm install @yessir/ginetex-icons
```

### With Yarn

```bash
yarn add @yessir/ginetex-icons
```

## Getting Started

### Using in HTML

You can directly reference the SVG files in standard `<img>` tags:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Care Symbols Demo</title>
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
      }
      .symbols img {
        width: 48px;
        height: 48px;
      }
    </style>
  </head>
  <body>
    <h1>Garment Care Instructions</h1>

    <div class="care-instruction">
      <h2>Regular Cotton Shirt</h2>
      <div class="symbols">
        <img src="node_modules/@yessir/ginetex-icons/assets/washing/wash-40c.svg" alt="Wash at 40°C" />
        <img src="node_modules/@yessir/ginetex-icons/assets/bleaching/bleach-allowed.svg" alt="Bleaching allowed" />
        <img src="node_modules/@yessir/ginetex-icons/assets/drying/tumble-dry.svg" alt="Tumble dry" />
        <img src="node_modules/@yessir/ginetex-icons/assets/ironing/iron-medium.svg" alt="Iron at medium temperature" />
      </div>
    </div>
  </body>
</html>
```

### Using with React

In React or modern bundlers, you can import the SVGs as modules:

```jsx
import wash40c from '@yessir/ginetex-icons/assets/washing/wash-40c.svg';
import bleachAllowed from '@yessir/ginetex-icons/assets/bleaching/bleach-allowed.svg';
import React from 'react';

export function CareLabel() {
  return (
    <div className="care-label" style={{ display: 'flex', gap: '10px' }}>
      <img src={wash40c} alt="Wash 40C" width={32} height={32} />
      <img src={bleachAllowed} alt="Bleach allowed" width={32} height={32} />
    </div>
  );
}
```

## Next Steps

- Check [Contributing Guide](../CONTRIBUTING.md) to contribute
- Visit [Ginetex](https://www.ginetex.net/) for official symbol definitions
