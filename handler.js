// Require and create a new nuxt instance
const Nuxt = require('nuxt')

let nuxtConfig = require('./nuxt.config.js')
nuxtConfig.dev = false
const nuxt = new Nuxt(nuxtConfig)

// Setup a new serverless express instance
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const awsServerlessExpress = require('aws-serverless-express')
const app = require('express')()
const server = awsServerlessExpress.createServer(app)

// Import the API routes before we setup nuxt's front-end routes
app.use('/api', require('./app/api'))

// Setup middleware
app.use(awsServerlessExpressMiddleware.eventContext())

// Import nuxt's routes
app.use(nuxt.render)

// Main handler function called by API Gateway
module.exports.main = (event, context) => {
  // Workaround for double gzip encoding issue
  // HTTP gzip encoding should be done higher-up via something like CloudFront/CloudFlare
  event.headers['Accept-Encoding'] = 'identity'

  // Proxy all API calls through to express's routing configured above
  console.log('proxying event=', event)
  awsServerlessExpress.proxy(server, event, context)
}