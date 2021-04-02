const { app } = require('config/env.config')
const { allowListDomains } = app

const allowlist = allowListDomains.split(',')

module.exports.corsOptions = {
  origin: function (req, callback) {
    let corsOptionsHeader
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOptionsHeader = {
        origin: true,
        methods: 'POST, GET, PUT, OPTIPONS',
        allowedHeaders: ['Content-Type', 'x-auth', 'x-api'],
      } // reflect (enable) the requested origin in the CORS response
      callback(null, corsOptionsHeader)
    } else {
      callback(new Error('Not Allowed by CORS'))
      // callback expects two parameters: error and options
    }
  },
}
