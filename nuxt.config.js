module.exports = {
  head: {
    title: 'Serverless Side Rendering',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project with Serverless' }
    ]
  },
  build: {
    vendor: ['axios']
  },
  srcDir: './views',
  performance: {
    gzip: false
  },
  router: {
    base: '/'
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
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