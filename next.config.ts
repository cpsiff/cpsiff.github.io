import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/geometric-calibration',
        destination: '/geometric-calibration/index.html',
        permanent: true,
      },
      {
        source: '/towards_3d_vision',
        destination: '/towards_3d_vision/index.html',
        permanent: true,
      },
      {
        source: '/unlocking_proximity_sensors',
        destination: '/unlocking_proximity_sensors/index.html',
        permanent: true,
      },
      {
        source: '/using_a_distance_sensor',
        destination: '/using_a_distance_sensor/index.html',
        permanent: true,
      },
      {
        source: '/recovering_parametric_scenes',
        destination: '/recovering_parametric_scenes/index.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
