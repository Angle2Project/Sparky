module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sparky',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sparky Project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      { rel: 'stylesheet', href: './css/global.css'}
    ],    
    script: [
      { src: './js/TweenMax.min.js' },
      { src: './js/MorphSVGPlugin.min.js' },
      { src: './js/SplitText.min.js' }
    ],
    plugins: [
      
    ]
  },
  router: {
    //base: '/sparky/'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
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

