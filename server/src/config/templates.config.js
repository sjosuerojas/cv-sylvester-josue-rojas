const path = require('path')
const exphbs = require('express-handlebars')

exports.templateEngineConfig = function (app) {
  app.set('views', path.join(__dirname, '../views'))

  app.engine(
    '.hbs',
    exphbs({
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )

  app.set('view engine', '.hbs')
}
