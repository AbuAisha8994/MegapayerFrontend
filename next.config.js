/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable all SWC functionality
  swcMinify: false,
  webpack: (config, { isServer }) => {
    // Font file loader configuration
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    });
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        child_process: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Disable SWC compiler completely
  experimental: {
    forceSwcTransforms: false,
    swcTraceProfiling: false,
  },
  compiler: {
    // Disables the SWC compiler
    styledComponents: true,
    emotion: false,
    relay: false,
    reactRemoveProperties: false,
    removeConsole: false,
  },
  // Disable type checking during production build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during production build (optional)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
