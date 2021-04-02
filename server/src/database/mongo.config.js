const mongoose = require('mongoose')
const GlobalStatus = require('helpers/status')
const { db } = require('config/env.config')

const connection = () => {
  mongoose
    .connect(db.url, db.options)
    .then(() => GlobalStatus.verifyStatusDatabase())
    .catch((err) => console.error(err))
}

connection()
