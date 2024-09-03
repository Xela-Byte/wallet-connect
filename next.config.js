/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/', // Matches all routes
        headers: [
          {
            key: 'Cache-Control',
            value:
              'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "connect-src 'self' wss://relay.walletconnect.com; frame-ancestors 'self' https://*.walletconnect.com;",
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

module.exports = nextConfig;

