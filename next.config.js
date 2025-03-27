/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable all SWC functionality
  swcMinify: false,
  webpack: (config) => {
    // Font file loader configuration
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  // Disable SWC compiler completely
  experimental: {
    forceSwcTransforms: false,
    swcTraceProfiling: false
  },
  compiler: {
    // Disables the SWC compiler
    styledComponents: true,
    emotion: false,
    relay: false,
    reactRemoveProperties: false,
    removeConsole: false
  }
}

module.exports = nextConfig
