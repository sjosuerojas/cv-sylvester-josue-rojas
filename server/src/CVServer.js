/** Init Express*/
const express = require('express')

/** Config options */
const GlobalStatus = require('./helpers/status')
const ServerState = require('./config/server.config')

/** Global router */
const Router = require('./routes/index')

/** Config database */
require('database/mongo.config')

/** Main constructor */
module.exports = class CVServer {
  constructor() {
    // Config express through all application
    this.app = express()
    this.config()
    this.routes()
  }

  config() {
    // Set main configuration for the server: security, parsers, port, cors
    ServerState.initConfig(this.app)
  }

  start() {
    // Server listing on port specified, defined in config file
    this.app.listen(this.app.get('onPort'), () => {
      GlobalStatus.verifyStatusServer(this.app)
    })
  }

  routes() {
    // Rotes configuration for app
    Router.appRoutes(this.app)
  }
}
