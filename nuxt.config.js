require('dotenv').config()

export default {
  mode: 'universal',
  env: {
    isLocal: process.env.IS_LOCAL
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Rob Derks - business savvy programmer',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;700&family=Source+Code+Pro&display=swap'
      }
    ],
    htmlAttrs: {
      class: 'has-navbar-fixed-top'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** Within this css we edit the defaults for Buefy
  */
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    '~/plugins/vue-observe-visibility',
    '~/plugins/vue2-smooth-scroll',
    '~/plugins/i18n.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  /*
  ** This loads the scss variables in all vue components
  ** This does not yet modify Buefy default variables
  */
  styleResources: {
    scss: ['~/assets/scss/_variables.scss']
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },
  /*
   ** Buefy module configuration
   ** https://buefy.org/documentation/constructor-options
   */
  buefy: {
    css: false,
    defaultIconPack: 'fas',
    materialDesignIconsHRef: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['vue-i18n'],
    extend (config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader'
        ]
      })
    }
  },
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/nl', '/en']
  }
}
