/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "sabirmustafaev-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

// s3://sabirmustafaev-nextjs-demo-users-image/

// https://sabirmustafaev-nextjs-demo-users-image.s3.eu-north-1.amazonaws.com/
