const WelcomeController = require('./controllers/Welcome.controller')

/**
 * @argument app
 * @description routesConfig
 * @returns {Array}
 */
exports.routesConfig = function (app) {
  app.get('/api/welcome', WelcomeController.init)
}