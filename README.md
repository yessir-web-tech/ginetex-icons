# YESSIR - Ginetex Care Symbols Font Package

[![GitHub license](https://img.shields.io/github/license/yessir-org/ginetex-care-symbols)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@yessir/ginetex-care-symbols.svg)](https://www.npmjs.com/package/@yessir/ginetex-care-symbols)
[![Node.js CI](https://github.com/yessir-org/ginetex-care-symbols/workflows/Node.js%20CI/badge.svg)](https://github.com/yessir-org/ginetex-care-symbols/actions)

**YESSIR** is an open-source initiative to provide **Ginetex care symbols** in modern font format. The Ginetex care symbols are standardized international textile care instructions that define washing, bleaching, drying, ironing, and professional care requirements.

This package converts the official Ginetex symbols from SVG into web-ready font formats, making them easily accessible to developers and designers without worrying about finding or maintaining individual SVG assets.

**Reference:** [Ginetex Care Symbols - Official Labelling Standards](https://www.ginetex.net/gb/labelling/care-symbols.asp)

## 🎨 Features

- ✨ **Complete Care Symbol Set** - All 50+ official Ginetex care symbols
- 📚 **Organized by Category** - Washing, Bleaching, Drying, Ironing, Professional Care
- ⚡ **Web Font Ready** - TTF, WOFF, WOFF2 formats
- 🔤 **Easy Integration** - Use in HTML, CSS, React, Vue, and any web framework
- 📦 **Lightweight** - Minimal file sizes optimized for web
- 🧪 **Open Source** - MIT licensed, community-driven development

## 📦 Installation

### As npm package

```bash
npm install @yessir/ginetex-care-symbols
```

### Via Yarn

```bash
yarn add @yessir/ginetex-care-symbols
```

## 🚀 Quick Start

### HTML Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      rel="stylesheet"
      href="node_modules/@yessir/ginetex-care-symbols/dist/ginetex-icons.css"
    />
    <style>
      .care-label {
        display: flex;
        gap: 15px;
        font-size: 48px;
      }
    </style>
  </head>
  <body>
    <h1>Garment Care Instructions</h1>
    <div class="care-label">
      <span class="gx-icon gx-wash-40c" title="Wash at 40°C"></span>
      <span class="gx-icon gx-no-bleach" title="Do not bleach"></span>
      <span class="gx-icon gx-tumble-dry" title="Tumble dry"></span>
      <span class="gx-icon gx-iron-low" title="Iron at low temperature"></span>
    </div>
  </body>
</html>
```

### React Component

```jsx
import '@yessir/ginetex-care-symbols/dist/ginetex-icons.css';

export function CareLabel({ instructions }) {
  return (
    <div className="care-label">
      {instructions.map(icon => (
        <span key={icon.code} className={`gx-icon gx-${icon.code}`} title={icon.description} />
      ))}
    </div>
  );
}

// Usage
<CareLabel
  instructions={[
    { code: 'wash-40c', description: 'Wash at 40°C' },
    { code: 'no-bleach', description: 'Do not bleach' },
    { code: 'tumble-dry', description: 'Tumble dry' }
  ]}
/>;
```

### CSS Only

```css
/* Add to your stylesheet */
@font-face {
  font-family: 'Ginetex Icons';
  src: url('../fonts/ginetex-icons.woff2') format('woff2');
}

.care-icon {
  font-family: 'Ginetex Icons';
  font-size: 24px;
  display: inline-block;
}
```

## 📋 Care Symbols Categories

### 🧼 Washing (14 symbols)

- Temperature options: 30°C, 40°C, 60°C, 70°C, 95°C
- Hand wash instructions
- Gentle wash cycles

```
gx-wash-30c
gx-wash-40c
gx-wash-60c
gx-wash-70c
gx-wash-95c
gx-hand-wash
gx-hand-wash-40c
gx-no-wash
```

### 🧹 Bleaching (4 symbols)

- Bleach allowed
- Oxygen bleach only
- No bleach

```
gx-bleach-allowed
gx-oxygen-bleach-only
gx-no-bleach
gx-bleaching
```

### 🌬️ Drying (20 symbols)

- Tumble drying options
- Line drying
- Flat drying
- Professional drying

```
gx-tumble-dry
gx-tumble-dry-low
gx-tumble-dry-medium
gx-line-dry
gx-flat-dry
gx-dry-in-shade
```

### 🔥 Ironing (6 symbols)

- Temperature levels: Low, Medium, High
- Steam options
- No ironing

```
gx-iron-low
gx-iron-medium
gx-iron-high
gx-iron-no-steam
gx-no-iron
gx-hot-iron
```

### 🏢 Professional Care (6 symbols)

- Dry cleaning
- Wet cleaning
- Special care instructions

```
gx-dry-clean
gx-dry-clean-hydrocarbons
gx-professional-wet-clean
gx-no-dry-clean
gx-professional-care
gx-mild-professional-wet-clean
```

## 📚 Documentation

- **[Installation Guide](docs/INSTALLATION.md)** - Detailed setup instructions
- **[API Reference](docs/API.md)** - Complete symbol reference
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute
- **[Changelog](docs/CHANGELOG.md)** - Version history

## 🛠️ Development

### Setup

```bash
git clone https://github.com/yessir-org/ginetex-care-symbols.git
cd ginetex-care-symbols
npm install
```

### Available Scripts

```bash
# Run tests
npm test

# Watch mode during development
npm run test:watch

# Generate test coverage report
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Build font files
npm run build
```

### Project Structure

```
.
├── assets/                      # SVG source files
│   ├── washing/                # Washing symbols (14)
│   ├── bleaching/              # Bleaching symbols (4)
│   ├── drying/                 # Drying symbols (20)
│   ├── ironing/                # Ironing symbols (6)
│   └── professional-care/      # Professional care symbols (6)
├── src/
│   ├── index.js               # Main entry point
│   ├── optimizer.js           # SVG optimization
│   └── cli.js                 # Command-line interface
├── dist/                      # Generated font files
│   ├── ginetex-icons.woff2
│   ├── ginetex-icons.woff
│   ├── ginetex-icons.ttf
│   ├── ginetex-icons.css
│   └── ginetex-icons.json     # Symbol reference
├── test/                      # Test files
├── docs/                      # Documentation
└── package.json
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

**Important:** Ginetex is a trademark of Ginetex. This project is an independent, open-source implementation of the Ginetex care symbol standards for accessibility and developer convenience.

## 🙏 Acknowledgments

- 🎯 [Ginetex](https://www.ginetex.net/) - For the official care symbol standards
- 👥 All contributors and community members
- 📖 Open-source community for inspiration and tools

## 📧 Support

- 🐛 [Report Issues](https://github.com/yessir-org/ginetex-care-symbols/issues)
- 💬 [Start Discussion](https://github.com/yessir-org/ginetex-care-symbols/discussions)
- 📖 [Read Documentation](docs/)

---

**Made with ❤️ by YESSIR Organization**

_Bringing international textile care standards to the web_
