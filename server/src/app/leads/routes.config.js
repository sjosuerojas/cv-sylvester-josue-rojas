const LeadController = require('./controllers/Lead.controller')
const verifyAuth = require('../common/middlewares/VerifyAuth')
const { checkSchema } = require('express-validator')
const { LeadSchema } = require('./models/Lead.model')

/**
 * @argument app
 * @description routesConfig
 * @returns {Array}
 */
exports.routesConfig = function (app) {
  app.post('/api/request-lead', [
    verifyAuth.validAPIKey,
    checkSchema(LeadSchema),
    verifyAuth.isValidSchemaModel,
    LeadController.saveLeadData,
  ])
}
