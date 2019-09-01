const withOffline = require('next-offline')

const nextConfig = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/index': { page: '/index' },
      '/people/1': { page: '/people/[id]', query: { id: 1 } },
      '/people/3': { page: '/people/[id]', query: { id: 3 } },
      '/people/4': { page: '/people/[id]', query: { id: 4 } },
      '/people/10': { page: '/people/[id]', query: { id: 10 } }
    }
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /api/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'apiCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  }
}

module.exports = withOffline(nextConfig)
