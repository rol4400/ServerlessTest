//process.env.NODE_ENV = 'production';

// Import libraries
const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const path = require('path')

// Import Nuxt configuration
let nuxtConfig = require('./nuxt.config.js')
nuxtConfig.dev = false
const nuxt = new Nuxt(nuxtConfig)

// Create app
const app = express()

// Setup a new serverless express instance
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const awsServerlessExpress = require('aws-serverless-express')

// Create the server with the binary mime types setup
const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)

// Import the API routes before we setup nuxt's front-end routes
app.use('/api', require('./app/api'))

// Setup middleware
app.use(awsServerlessExpressMiddleware.eventContext())

// Serve front-end rendered static assets from nuxt
app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist')))

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