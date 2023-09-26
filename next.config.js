/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      // domains:[
      //   "moviesapi.ir",
      //   "s3.amazonaws.com",
      //   "bit.ly"
      // ]
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'toplearn.com',
        },
        {
          protocol: 'https',
          hostname: 'moviesapi.ir',
        },
      ],
    }
}

module.exports = nextConfig
