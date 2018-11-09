module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sparky',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sparky Project' },
      {name : 'viewport', content : 'width=device-width,minimum-scale=1.0,maximum-scale=1.0'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/global.css'}

      // { rel: 'icon', type: 'image/x-icon', href: '/sparky/favicon.ico' },
      // { rel: 'stylesheet', href: '/sparky/css/global.css'}
    ],    
    script: [
      { src: '/js/global.js' },
      { src: '/js/TweenMax.min.js' },
      { src: '/js/MorphSVGPlugin.min.js'},
      { src: '/js/SplitText.min.js' },
      { src: '/js/ModifiersPlugin.min.js' }
      
      // { src: '/sparky/js/global.js' },
      // { src: '/sparky/js/TweenMax.min.js' },
      // { src: '/sparky/js/MorphSVGPlugin.min.js'},
      // { src: '/sparky/js/SplitText.min.js' },
      // { src: '/sparky/js/ModifiersPlugin.min.js' }
      
    ]
  },  
  css: [
    // Загрузить модуль node.js
    'swiper/dist/css/swiper.min.css'
  ],
  plugins: ['~/plugins/vue-js-modal.js'], 
  router: {
      //base: '/sparky/'
  },
  modules: [
   '@nuxtjs/sitemap'
  ],
  sitemap: {
    generate: true,
    hostname: 'http://process.angleto.com/sparky/',    
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f6c930' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['swiper', 'axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

