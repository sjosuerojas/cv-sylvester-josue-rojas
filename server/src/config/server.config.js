// Global Variables
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { app: server } = require('config/env.config')
const corsOptions = require('config/cors.config.js')

exports.initConfig = function (app) {
  /**
   * @description Set port for the whole application
   * @static port
   */
  app.set('onPort', server.port)

  /**
   * @description Helmet for secure Header in application
   * @author helmet
   */
  app.use(helmet())
  /**
   * @description Helmet for secure Header in application
   * @author cors
   */
  app.use(cors(corsOptions))
  /**
   * @description Handles form-url endcoded is extended (n)mb +
   * @author expressParser
   */
  app.use(express.urlencoded({ extended: true }))
  /**
   * @description Handles json parser is extended (n)mb +
   * @author expressParser
   */
  app.use(express.json())
  /**
   * @description For Dev purposes, logs every route entry
   * @author morgan
   */
  app.use(morgan('dev'))
}
