require('dotenv-flow').config()

module.exports = {
  app: {
    url: process.env.APP_FRONTEND,
    port: process.env.PORT,
    apiKey: process.env.APP_APIKEY,
    secret: process.env.ACCESS_TOKEN_SECRET,
    enviroment: process.env.NODE_ENV,
    allowListDomains: process.env.APP_ALLOW_DOMAINS,
  },
  db: {
    url: process.env.DB_URL,
    options: {
      poolSize: process.env.DB_POOLSIZE,
      useNewUrlParser: process.env.DB_USENEWURLPARSER,
      useUnifiedTopology: process.env.DB_USEUNIFIEDTOPOLOGY,
      useCreateIndex: process.env.DB_USECREATEINDEX,
    },
  },
  mailer: {
    host: process.env.MALER_HOST,
    sender: process.env.MAILER_SENDER,
    port: process.env.MALER_PORT,
    servername: process.env.MALER_SERVERNAME,
    user: process.env.MALER_USER,
    pass: process.env.MALER_PASS,
  },
}
