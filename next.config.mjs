/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: "export",
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
