# YESSIR - Ginetex Care Symbols Icons Package

[![GitHub license](https://img.shields.io/github/license/yessir-web-tech/ginetex-icons)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@yessir/ginetex-icons.svg)](https://www.npmjs.com/package/@yessir/ginetex-icons)

**YESSIR** is an open-source initiative to provide **Ginetex care symbols** in a modern, scalable **SVG format**. 

The official Ginetex website provides these symbols as a font, which is problematic for modern web development, accessibility, and precise styling. This project was created specifically to solve this problem by offering all official Ginetex symbols as clean, individual, and optimized SVG files instead of a restrictive font format.

**Reference:** [Ginetex Care Symbols - Official Labelling Standards](https://www.ginetex.net/gb/labelling/care-symbols.asp)

## 🎨 Features

- ✨ **Complete Care Symbol Set** - All 50+ official Ginetex care symbols
- 📐 **SVG Format** - Crisp, scalable, and independent SVG icons instead of a web font
- 📚 **Organized by Category** - Washing, Bleaching, Drying, Ironing, Professional Care
- 🔤 **Easy Integration** - Use in HTML, React, Vue, and any web framework easily as inline SVGs or image tags
- 📦 **Lightweight** - Optimized SVGs for fast loading
- 🧪 **Open Source** - MIT licensed, community-driven development

## 📦 Installation

### As npm package

```bash
npm install @yessir/ginetex-icons
```

### Via Yarn

```bash
yarn add @yessir/ginetex-icons
```

## 🚀 Quick Start

### HTML Usage

Simply use the SVGs as standard `<img>` tags or inline SVGs:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .care-label {
        display: flex;
        gap: 15px;
      }
      .care-label img {
        width: 48px;
        height: 48px;
      }
    </style>
  </head>
  <body>
    <h1>Garment Care Instructions</h1>
    <div class="care-label">
      <img src="node_modules/@yessir/ginetex-icons/assets/washing/wash-40c.svg" alt="Wash at 40°C" />
      <img src="node_modules/@yessir/ginetex-icons/assets/bleaching/no-bleach.svg" alt="Do not bleach" />
      <img src="node_modules/@yessir/ginetex-icons/assets/drying/tumble-dry.svg" alt="Tumble dry" />
      <img src="node_modules/@yessir/ginetex-icons/assets/ironing/iron-low.svg" alt="Iron at low temperature" />
    </div>
  </body>
</html>
```

### React Component

You can import the SVGs as React components (e.g. using SVGR) or use them as regular image sources:

```jsx
import wash40c from '@yessir/ginetex-icons/assets/washing/wash-40c.svg';
import noBleach from '@yessir/ginetex-icons/assets/bleaching/no-bleach.svg';
import tumbleDry from '@yessir/ginetex-icons/assets/drying/tumble-dry.svg';

export function CareLabel() {
  return (
    <div className="care-label" style={{ display: 'flex', gap: '15px' }}>
      <img src={wash40c} alt="Wash at 40°C" width={48} height={48} />
      <img src={noBleach} alt="Do not bleach" width={48} height={48} />
      <img src={tumbleDry} alt="Tumble dry" width={48} height={48} />
    </div>
  );
}
```

## 📋 Care Symbols Categories

### 🧼 Washing (14 symbols)

- Temperature options: 30°C, 40°C, 60°C, 70°C, 95°C
- Hand wash instructions
- Gentle wash cycles

### 🧹 Bleaching (4 symbols)

- Bleach allowed
- Oxygen bleach only
- No bleach

### 🌬️ Drying (20 symbols)

- Tumble drying options
- Line drying
- Flat drying
- Professional drying

### 🔥 Ironing (6 symbols)

- Temperature levels: Low, Medium, High
- Steam options
- No ironing

### 🏢 Professional Care (6 symbols)

- Dry cleaning
- Wet cleaning
- Special care instructions

## 📚 Documentation

- **[Installation Guide](docs/INSTALLATION.md)** - Detailed setup instructions
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

**Important:** Ginetex is a trademark of Ginetex. This project is an independent, open-source implementation of the Ginetex care symbol standards for accessibility and developer convenience.

## 🙏 Acknowledgments

- 🎯 [Ginetex](https://www.ginetex.net/) - For the official care symbol standards
- 👥 All contributors and community members
- 📖 Open-source community for inspiration and tools

## 📧 Support

- 🐛 [Report Issues](https://github.com/yessir-web-tech/ginetex-icons/issues)
- 💬 [Start Discussion](https://github.com/yessir-web-tech/ginetex-icons/discussions)
- 📖 [Read Documentation](docs/)

---

**Made with ❤️ by YESSIR Organization**

_Bringing international textile care standards to the web as SVGs_
