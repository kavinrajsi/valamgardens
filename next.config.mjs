/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  /**
   * Apex to www, so the canonical host is the only one that serves pages.
   * `site.url` in src/lib/site.js is www, and canonicals, the sitemap, robots
   * and schema all derive from it — this stops the apex serving a duplicate
   * copy of every page under a host those tags disown.
   *
   * `permanent: true` is a 308, not a 301: it preserves the request method,
   * which matters because Server Actions POST back to the page they run on.
   *
   * Hosting may well do this at the domain level too. Both is harmless — the
   * platform redirect fires first — and keeps the behaviour with the code.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "valamgardens.com" }],
        destination: "https://www.valamgardens.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
