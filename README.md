# SVGO - SVG Optimizer

[![GitHub license](https://img.shields.io/github/license/yourusername/svgo)](LICENSE)
[![npm version](https://img.shields.io/npm/v/svgo.svg)](https://www.npmjs.com/package/svgo)
[![Node.js CI](https://github.com/yourusername/svgo/workflows/Node.js%20CI/badge.svg)](https://github.com/yourusername/svgo/actions)

A powerful Node.js library for optimizing and minifying SVG files. SVGO removes unnecessary elements and optimizes SVG markup while preserving visual quality.

## Features

✨ **Clean & Optimize** - Remove unnecessary metadata and optimize SVG structure  
⚡ **Fast** - High-performance processing for batch operations  
🎯 **Configurable** - Fine-tune optimization with numerous options  
📦 **CLI & Library** - Use as command-line tool or Node.js library  
🧪 **Well-tested** - Comprehensive test coverage  
📄 **TypeScript Ready** - Full TypeScript support  

## Installation

### As npm package

```bash
npm install svgo
```

### Global CLI

```bash
npm install -g svgo
```

## Quick Start

### Using as Library

```javascript
const SVGO = require('svgo');

const svgo = new SVGO({
  plugins: [
    { name: 'removeDoctype' },
    { name: 'removeComments' },
    { name: 'removeMetadata' }
  ]
});

const svg = '<svg>...</svg>';
svgo.optimize(svg).then(result => {
  console.log(result.data);
});
```

### Using CLI

```bash
svgo input.svg -o output.svg
svgo *.svg --folder=dist/
```

## Configuration

Create a `.svgorc.json` or `svgo.config.js` file in your project root:

```json
{
  "plugins": [
    {
      "name": "preset-default",
      "params": {
        "overrides": {
          "convertPathData": false
        }
      }
    }
  ]
}
```

## Available Plugins

- `removeDoctype` - Remove DOCTYPE declaration
- `removeComments` - Remove XML comments
- `removeMetadata` - Remove metadata element
- `removeXMLProcInst` - Remove XML processing instructions
- `removeTitle` - Remove title element
- `removeDesc` - Remove description element
- `removeEmptyAttrs` - Remove empty attributes
- `removeEmptyContainers` - Remove empty containers
- `convertPathData` - Optimize path data
- `convertTransform` - Simplify transforms
- `removeUnknownsAndDefaults` - Remove unknown elements
- `removeUselessStrokeAndFill` - Remove default stroke/fill
- `removeViewBox` - Remove viewBox attribute

## Development

### Setup

```bash
git clone https://github.com/yourusername/svgo.git
cd svgo
npm install
```

### Running Tests

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Linting & Formatting

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format with Prettier
npm run format
```

## Project Structure

```
svgo/
├── src/
│   ├── index.js           # Main entry point
│   ├── optimizer.js       # Core optimizer logic
│   ├── plugins/           # Plugin modules
│   └── cli.js             # CLI interface
├── test/
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── fixtures/          # Test SVG files
├── docs/                  # Documentation
├── assets/                # SVG assets (logos, examples)
├── .github/workflows/     # GitHub Actions CI/CD
├── package.json
├── README.md
└── LICENSE
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](docs/CHANGELOG.md) for version history.

## Support

- 📖 [Documentation](docs/)
- 🐛 [Report Issues](https://github.com/yourusername/svgo/issues)
- 💬 [Discussions](https://github.com/yourusername/svgo/discussions)

## Acknowledgments

- Thanks to all contributors
- Inspired by the original SVGO project
- Special thanks to the SVG community

---

Made with ❤️ by Your Name
