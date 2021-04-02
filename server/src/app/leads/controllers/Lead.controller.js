const { app, mailer } = require('config/env.config')
const LeadDB = require('database/schema/Lead')
const Mailer = require('helpers/mailer')
const randtoken = require('rand-token')
const jwt = require('jsonwebtoken')

/**
 * @argument req, res
 * @description sendEmailToLead
 * @returns Promise<obj> data | <obj> err
 */
const sendEmailToLead = ({ OleCTisTARDEsPH_email, OleCTisTARDEsPH_firstname }) => {
  return new Promise((resolve, reject) => {
    const options = {
      templateName: 'email-contact-me',
      from: mailer.sender,
      to: OleCTisTARDEsPH_email,
      subject: `${OleCTisTARDEsPH_firstname}, Gracias por tu interes, te adjunto mi curriculum 😎`,
      userData: { name: OleCTisTARDEsPH_firstname },
    }

    Mailer.newMail(options)
      .then(() => resolve(true))
      .catch((err) => reject(err))
  })
}

/**
 * @argument req, res
 * @description sendEmailToAdmin
 * @returns Promise<obj> data | <obj> err
 */
const sendEmailToAdmin = (userData) => {
  return new Promise((resolve, reject) => {
    const options = {
      templateName: 'email-admin',
      from: mailer.sender,
      to: 'sjosuerojasc@gmail.com',
      subject: `🥳 Nuevo Lead interesado en tu perfil, ${userData.OleCTisTARDEsPH_firstname}`,
      userData: { ...userData },
    }

    Mailer.newMail(options)
      .then(() => resolve(true))
      .catch((err) => reject(err))
  })
}

/**
 * @argument req, res
 * @description saveLeadData
 * @returns Promise<obj> data | <obj> err
 */
exports.saveLeadData = (req, res) => {
  const body = req.body

  const Lead = new LeadDB({
    OleCTisTARDEsPH_firstname: body.firstname,
    OleCTisTARDEsPH_lastname: body.lastname,
    OleCTisTARDEsPH_email: body.email,
    OleCTisTARDEsPH_country: body.country,
    OleCTisTARDEsPH_company: body.company,
    OleCTisTARDEsPH_phone: body.phone,
    OleCTisTARDEsPH_question_1: body.question_1,
  })

  Lead.save(async (err, dbResponse) => {
    if (err) {
      return res.status(400).json({
        statusOk: false,
        error_details: err,
      })
    }

    res.status(201).json({
      statusOk: true,
      message: `Solicitud recibida, ${dbResponse._id}`,
    })

    /** Async Request */
    try {
      await sendEmailToAdmin({ ...dbResponse._doc })
      await sendEmailToLead({ ...dbResponse._doc })
    } catch (error) {
      console.error(error)
    }
  })
}

/**
 * @argument req, res
 * @description renovateToken
 * @returns Promise<obj> data | <obj> err
 */
exports.renovateToken = (req, res) => {
  const uid = randtoken.uid(16);

  const token = jwt.sign({ data: app.apiKey }, app.secret, {
    expiresIn: '5m',
  });

  res.status(200).json({
    statusOk: true,
    data: { uid },
    token,
  });
}