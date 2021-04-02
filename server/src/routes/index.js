exports.appRoutes = function (app) {
  /**
   * @name lead-routes
   * @description Welcome route created for testing purposes
   * @param {app} express
   */
  require('app/leads/routes.config').routesConfig(app)
  /**
   * @name common-routes
   * @description Common purpose
   * @param {app} express
   */
  require('app/common/routes.config').routesConfig(app)
}
