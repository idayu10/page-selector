import i18n from './nuxt-i18n.config'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'weather-data-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/default.css',
    '../node_modules/font-awesome/css/font-awesome.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/vue-inject' },
    { src: '@/plugins/global-filters' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['nuxt-i18n', i18n]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL:'http://localhost:8080',
    baseURL:'http://unipepper.biz:8081',
    proxy:true
  },
  proxy: {
    '/weather-data-api': {
      // target: 'http://localhost:8080',
      target: 'http://unipepper.biz:8081',
      // pathRewrite: {
      //   '^/api': '/'
      // },
      changeOrigin: true,
      rejectUnauthorized: false
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  srcDir: 'src/'
}
