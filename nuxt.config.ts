// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // server side rendering mode
  ssr: true,

  // typescript strict mode
  typescript: {
    strict: true
  },

  // app
  app: {
    head: {
      title: 'Nuxt 3 Awesome Starter',
      titleTemplate: '%s - Nuxt 3 Awesome Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Awesome Starter'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  // css
  css: [
    //
  ],

  // plugins
  plugins: [
    //
  ],

  // build
  build: {
    transpile: [
      //
    ]
  },

  // modules
  modules: [
    '@nuxt/content'
  ],

  // experimental features
  experimental: {
    reactivityTransform: false
  },

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      //
    ]
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
