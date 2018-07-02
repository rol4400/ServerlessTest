Welcome to a test Serverless application
==================================================

This is a test application for learning how serverless development works

Libraries Used
-----------

This project uses:

* NodeJS
* Caminte
* nuxt
* VueJS 
* Serverless Framework
* Express


Installation
------------------

After cloning the repo run npm install immediately to install all the frameworks necessary

You may also need to install some of the following global npm packages:
* Serverless cli
* VueJS cli (optional, not required)
* Caminte cli (useful for generating entity models and routes)
* Others I can't remember that I'll add to this list later

Development
------------------
Pages are rendered on initial page load server-side using nuxt as HTML, for speed and SEO-optimisation. These are served through Express as a serverless function. All API requests are proxied through one handler function and routing is managed by Express.

The app folder contains folders for routes, tests and models. Documentation for these can be found at: https://github.com/biggora/caminte When a new model is added, the routes for it should be imported into the api.js file for them to be used. All api routes are proxied to /api to keep them separate from front-end routes.
The views folder contains the front-end for the site. These are all vue components; however, the folders and files follow a naming convention enforced by nuxt. Nuxt will automatically generate routes and compile these files. For information on how stylesheets, VueJS components etc. should be implemented check out: https://nuxtjs.org/guide/

To start the development server run "npm run dev". This will build the viewjs files using nuxt, check for code inconsistencies using eslint and start a server on localhost:3000. Most code /app should be able to be changed and tested without restarting the server and any changes to VueJS files should cause nuxt to rebuild.

Deployment
------------------
If you wish to deploy, you should first run "serverless config credentials --provider aws --key key_id --secret secret_key" and "serverless login" to connect serverless to aws. The credentials can be found through IAS and should be for the serverless-admin user. There are a number of commands setup for node that should deploy automatically; however, these have not yet been tested with the pipeline and build system used. You should be able to trigger the build and deploy process through the AWS Codestar page for this project after commiting changes with Git.
