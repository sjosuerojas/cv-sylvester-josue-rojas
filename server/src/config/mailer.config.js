const { mailer } = require('config/env.config')
const { host, port, user, pass } = mailer

let configMailer = {}

if (host !== 'smtp.ethereal.email') {
  configMailer = {
    host,
    port,
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user,
      pass,
    },
  }
} else {
  configMailer = {
    host,
    port,
    secure: false,
    auth: {
      user,
      pass,
    },
  }
}

module.exports = configMailer
