const fs = require('fs')
const path = require('path')
const Handlebars = require('handlebars')
const nodemailer = require('nodemailer')
const optionsMailer = require('config/mailer.config')

/**
 * @description Creates mail & send to specific recipient
 * @param mailconf object
 * @returns transporter Promise */

exports.newMail = function (mailconf) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport(optionsMailer)
    let template = resolvePathTemplate(mailconf.templateName)
    const wasSent = transporter.sendMail({
      from: mailconf.from,
      to: mailconf.to,
      subject: mailconf.subject,
      html: template(mailconf.userData),
    })

    wasSent.then(() => resolve(true)).catch((error) => reject(error))
  })
}

/**
 * @description Returns the relative path to views handled by name tmplate
 * @param templateName string
 * @returns template Handlebar class */

function resolvePathTemplate(templateName) {
  let source = fs.readFileSync(
    path.join(__dirname, `../views/emails/${templateName}.hbs`),
    'utf8'
  )
  return Handlebars.compile(source)
}
