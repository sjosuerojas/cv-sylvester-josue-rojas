const jwt = require('jsonwebtoken')
const { app } = require('config/env.config')
const { validationResult } = require('express-validator')

/**
 * @argument req, res, next
 * @description validJWTNeeded
 * @returns Request handlers
 */
exports.validJWTNeeded = (req, res) => {
  const qString = req.query
  if (qString.token) {
    try {
      if (!jwt.verify(qString.token, app.secret)) {
        return res
          .status(401)
          .json({ statusOk: false, error_details: 'INVALID_TOKEN' })
      }

      res.status(200).json({
        statusOk: true,
        message: 'Successfull token is still alive',
      })
    } catch (err) {
      return res.status(403).json({
        statusOk: false,
        error_message: 'Token expiro',
        error_details: err,
      })
    }
  } else {
    return res
      .status(401)
      .json({ statusOk: false, error_details: 'INVALID_REQUEST' })
  }
}

/**
 * @argument req, res, next
 * @description validAPIKey
 * @returns Request handlers
 */
exports.validAPIKey = (req, res, next) => {
  const authorization = req.headers['x-api']
  if (authorization) {
    try {
      const authReq = authorization.split(' ')

      if (authReq[0] !== 'Basic') {
        return res
          .status(401)
          .json({ statusOk: false, error_details: 'INVALID_APIKEY' })
      } else {
        if (authReq[1] !== app.apiKey) {
          return res
            .status(401)
            .json({ statusOk: false, error_details: 'INVALID_TOKEN' })
        }
        return next()
      }
    } catch (error) {
      return res
        .status(403)
        .json({ statusOk: false, error_details: 'FORBIDDEN_REQUEST' })
    }
  } else {
    return res
      .status(401)
      .json({ statusOk: false, error_details: 'INVALID_REQUEST' })
  }
}

/**
 * @argument req, res, next
 * @description isValidSchemaModel
 * @returns Request handlers
 */
exports.isValidSchemaModel = (req, res = response, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      statusOk: false,
      error_validation: errors.mapped(),
    })
  }

  next()
}
