# Display Guide

A comprehensive guide to understanding display technology and making informed purchasing decisions.

## 🌍 Multi-language Support

This website supports multiple languages:
- **English** (default) - `/`
- **中文（简体）** - `/zh-Hans/`

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

### Internationalization

To add new translations:

1. Add the new locale to `docusaurus.config.ts` in the `i18n.locales` array
2. Create translation files in the `i18n/[locale]/` directory
3. Copy and translate content from the default locale

### Translation Commands

```bash
# Write translation files
npm run write-translations

# Clear cache
npm run clear
```

## 📚 Content Structure

- **English**: `i18n/en/docusaurus-plugin-content-docs/current/`
- **Chinese**: `i18n/zh-Hans/docusaurus-plugin-content-docs/current/`

## 🛠️ Built With

- [Docusaurus](https://docusaurus.io/) - The web framework for building documentation websites
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## 📄 License

This project is licensed under the MIT License.
