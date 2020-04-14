module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sparky | Digital Marketing and Creative Agency',
    meta: [
      { charset: 'utf-8'},      
      { hid: 'description', name: 'description', content: 'Sparky is a Boston-based digital marketing and creative services agency. We specialize in UI/UX consulting, design/creative services, conversion rate optimization, SEO, and more.'},
      {name : 'viewport', content : 'width=device-width,minimum-scale=1.0,maximum-scale=1.0'},
      {name : 'google-site-verification', content : 'zYy2uKf2qCCau8EDZPNBfsET0b91o0phhF-ofQy4POI'},      
      {property : 'og:title', content : 'Sparky | Digital Marketing and Creative Agency'},
      {property : 'og:type', content : 'website'},
      {property : 'og:url', content : 'https://www.sparky.us/'},
      {property : 'og:image', content : 'https://www.sparky.us/sparky_preview1.png'},
      {property : 'og:description', content : 'Sparky is a Boston-based digital marketing and creative services agency. We specialize in UI/UX consulting, design/creative services, conversion rate optimization, SEO, and more.'},      
    ],
    link: [
      //{ rel: 'canonical', href: 'https://www.sparky.us'},
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
      { src: '/js/ModifiersPlugin.min.js'}
      
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
  // plugins: ['~/plugins/vue-js-modal.js'], 
  router: {
      //base: '/sparky/'
  },
  modules: [
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-126758060-1'
    }]
  ],
  sitemap: {
    generate: true,
    hostname: 'https://www.sparky.us/',    
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

