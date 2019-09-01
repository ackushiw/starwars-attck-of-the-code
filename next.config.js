const withOffline = require('next-offline')

const nextConfig = {
  exportPathMap: async function (defaultPathMap) {
    console.log('default', defaultPathMap)
    return {
      ...defaultPathMap,
      '/people/1': { page: '/people/[id]', query: { id: 1 } },
      '/people/3': { page: '/people/[id]', query: { id: 3 } },
      '/people/4': { page: '/people/[id]', query: { id: 4 } },
      '/people/10': { page: '/people/[id]', query: { id: 10 } }
    }
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.svg$/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /swapi/,
        handler: 'NetworkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}

module.exports = withOffline(nextConfig)
