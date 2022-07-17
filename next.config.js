/** @type {{rewrites(): Promise<[{destination: string, source: string}]>, reactStrictMode: boolean}} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*"
      }
    ];
  }
};

module.exports = nextConfig;
