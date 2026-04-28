import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Docker + Windows 환경에서 Hot Reload(Fast Refresh) 개선
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,           // 1초마다 파일 변경 감지
        aggregateTimeout: 300,
      };
    }
    return config;
  },

  // 이미지 최적화 설정 (나중에 필요)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;