const withManifest = require('next-manifest')
const withOffline = require('next-offline')

const nextConfig = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/index': { page: '/index' },
      '/people/1/': { page: '/people/[id]', query: { id: 1 } },
      '/people/3/': { page: '/people/[id]', query: { id: 3 } },
      '/people/4/': { page: '/people/[id]', query: { id: 4 } },
      '/people/10/': { page: '/people/[id]', query: { id: 10 } }
    }
  },
  exportTrailingSlash: true,

  manifest: {
    output: './static',
    name: 'Attck',
    short_name: 'Attck',
    start_url: '/',
    icons: [
      {
        src: '/static/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/static/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone'
  },

  workboxOpts: {
    cleanupOutdatedCaches: true,
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

module.exports = withOffline(withManifest(nextConfig))
