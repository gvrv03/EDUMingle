/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.freepik.com", "veterinaire-tour-hassan.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: "raw-loader",
          },
        ],
      });
    }

    return config;
  },
};

module.exports = nextConfig;
