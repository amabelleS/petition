/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.hamas.com',
            port: '',
            pathname: '/wp-content/uploads/2023/11/**',
          },
          {
            protocol: 'https',
            hostname: 'www.jewishvirtuallibrary.org',
            port: '',
            pathname: '/jsource/images/terror/**',
          },
        ],
      },
}

module.exports = nextConfig
