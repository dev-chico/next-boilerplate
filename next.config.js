/* eslint @typescript-eslint/no-var-requires: "off" */
const isProd = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

module.exports = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
})

// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true
//   }
// }

// module.exports = nextConfig
