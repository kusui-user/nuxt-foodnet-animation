require('dotenv').config();
const{NAME,EMAIL,TEL,TITLE,MESSAGE} = process.env;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
 

  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '株式会社フードネットワーク',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/common.scss',
    '@/assets/scss/app.scss',
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-scrollmagic.js',
      ssr: false,
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/header',
    '~/components/contact',
    '~/components/company',
    // '~/components/online-shop',
    // '~/components/company-content',
    '~/components/common',
  
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/style-resources",
   

  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader','@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  webfontloader: {
    google: {
      families: ['Roboto', 'Noto+Sans+JP']
    }
  },
  styleResources: {
    scss: ['@/assets/scss/_colors.scss', '@/assets/scss/_variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: './components/Loading.vue',

  env:{
    NAME,
    EMAIL,
    TEL,
    TITLE,
    MESSAGE,
  }


}
