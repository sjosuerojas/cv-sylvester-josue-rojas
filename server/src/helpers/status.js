const { app: server } = require('config/env.config')

exports.verifyStatusServer = function (app) {
  console.log(
    ` 
      ,,        
      .g8"""bgd    '7MMF'   '7MF'          '7MMF'                  '7MM        
    .dP'     'M      'MA     ,V              MM                      MM        
    dM'       '       VM:   ,V               MM   ,pW"Wq.  ,pP"Ybd   MMpMMMb.  
    MM                 MM.  M'               MM  6W'   'Wb 8I   '"   MM    MM  
    MM.                'MM A'                MM  8M     M8 'YMMMa.   MM    MM  
    'Mb.     ,' ,,      :MM;     ,,     (O)  MM  YA.   ,A9 L.   I8   MM    MM  
      '"bmmmd'  db       VF      db      Ymmm9    'Ybmd9'  M9mmmP' .JMML  JMML.

      CV Server  v.1.02 
      Server running at:
    `
  )
  server.enviroment !== 'development'
    ? console.log(
        `  
        - Production Mode on Port: \x1b[36m%s\x1b[0m`,
        `${app.get('onPort')}`
      )
    : console.log(
        `  
        - Local: \x1b[36m%s\x1b[0m`,
        `http://localhost:${app.get('onPort')}`
      )
}

exports.verifyStatusDatabase = function () {
  server.enviroment !== 'development'
    ? console.log(
        `
        - Cloud Mongo is \x1b[33m%s\x1b[0m`,
        'Online'
      )
    : console.log(
        `
        - Mongo is \x1b[32m%s\x1b[0m`,
        'Online'
      )

  if (server.enviroment === 'development') {
    console.log(
      `

        Note that the development Server does not take the Cloud Database.
        To run the production Server, run \x1b[36m%s\x1b[0m.`,
      'npm start'
    )
  }
}
