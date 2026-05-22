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

```javascript
const SVGO = require('svgo');

const svgo = new SVGO({
  plugins: [{ name: 'removeDoctype' }, { name: 'removeComments' }, { name: 'removeMetadata' }]
});

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg">
  <!-- Comment -->
  <metadata>...</metadata>
  <circle cx="50" cy="50" r="40"/>
</svg>`;

svgo.optimize(svgContent).then(result => {
  console.log(result.data);
});
```

### Using the CLI

```bash
# Optimize a single file
svgo input.svg -o output.svg

# Optimize all SVG files in a folder
svgo *.svg --folder=dist/
```

## Configuration

Create a `.svgorc.json` file in your project root:

```json
{
  "plugins": [
    {
      "name": "preset-default"
    },
    {
      "name": "removeViewBox",
      "active": false
    }
  ]
}
```

Or use `svgo.config.js`:

```javascript
module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertPathData: false,
          convertTransform: true
        }
      }
    }
  ]
};
```

## Next Steps

- See [Plugin Documentation](./plugins.md) for available plugins
- Check [API Documentation](./api.md) for detailed API reference
- Read [Contributing Guide](../CONTRIBUTING.md) to contribute
