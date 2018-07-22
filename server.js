// Import libraries
const { Nuxt, Builder } = require('nuxt')
const path = require('path')
const express = require('express')
const app = express()
//const app = require('express')()

// Configure server settings
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000
// const app = express()

process.env.HOST = HOST
process.env.PORT = PORT

process.env.NODE_ENV = 'production';

// Import API routes seperate to nuxt routes
app.use('/api', require('./app/api'))

// Get the nuxt configuration
let config = require('./nuxt.config.js')
config.dev = (process.env.NODE_ENV !== 'production')

// Create a new nuxt instance using the configuration and import the
// routes into express
let nuxt = new Nuxt(config)

// Serve front-end rendered static assets from nuxt
app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist')))
app.use(nuxt.render)

// Extra logging if in development mode
if (config.dev) {
  new Builder(nuxt).build()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

// Start an express server and print the server's details to the console
// Listen the server
app.listen(PORT, HOST);

console.log(`Server started on ${HOST}:${PORT}`)