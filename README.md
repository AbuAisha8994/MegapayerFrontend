# Megapayer Website

## The Future of Blockchain Technology - 2025 Edition

This repository contains the official website for Megapayer, a comprehensive blockchain ecosystem featuring a native blockchain, social media platform, P2P exchange, DEX, universal wallet, and stablecoin.

## Getting Started

### Prerequisites

- Node.js 18+ (LTS)
- npm 9+

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/megapayer/megapayer-website.git
   cd megapayer-website
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   If you're on Windows with potential SWC issues, use:
   ```bash
   .\launch.bat
   ```

   Otherwise use the standard command:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/pages` - Next.js pages
- `/src/components` - Reusable React components
- `/src/styles` - Global styles and CSS modules
- `/public` - Static assets
  - `/whitepapers` - Whitepaper excerpts and PDFs
  - `/images` - Images for the website
  - `/fonts` - Custom font files

## Solving Common Issues

### SWC Compiler Errors

On Windows, you might encounter issues with the SWC compiler. We've provided several solutions:

1. Use the `launch.bat` script which sets appropriate environment variables and fallbacks
2. Use Babel instead of SWC by creating a .babelrc file
3. Update next.config.js to disable SWC

### Design Philosophy

This website showcases Megapayer's 2025 vision for blockchain technology with our design principles:

1. **Professional & Modern**: Clean layouts, advanced animations, and professional typography
2. **Universe Theme**: Space-inspired visuals that reflect the vast possibilities of our ecosystem
3. **Clear Information Architecture**: Easy navigation between our multiple products
4. **Performance First**: Optimized for speed and responsiveness across all devices

## Contributing

Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is prohibited.

© 2025 Megapayer Inc. All rights reserved.
