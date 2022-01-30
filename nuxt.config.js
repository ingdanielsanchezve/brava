export default {
  target: 'static',
  head: {
    title: 'Bravado',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    trailingSlash: true
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true
    }
  },

  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
    'nuxt-svg-loader',
    'nuxt-moment',
    '@nuxt/content',
    'nuxt-content-highlight',
  ],

  build: {
    transpile: [
        'nuxt-content-highlight',
        '@nuxt',
    ],
  }
}
