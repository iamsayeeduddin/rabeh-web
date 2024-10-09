/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  distDir: "build",
  // output: "export",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "rabeh.sa",
          },
        ],
        destination: "https://www.rabeh.sa/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
