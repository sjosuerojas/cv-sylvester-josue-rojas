const { Schema, model } = require('mongoose')

const Lead = new Schema({
  OleCTisTARDEsPH_firstname: {
    type: String,
    required: [true, 'firstname field is required'],
  },
  OleCTisTARDEsPH_lastname: {
    type: String,
    required: [true, 'lastname field is required'],
  },
  OleCTisTARDEsPH_email: {
    type: String,
    required: [true, 'email field is required'],
  },
  OleCTisTARDEsPH_country: {
    type: String,
    required: [true, 'country field is required'],
  },
  OleCTisTARDEsPH_company: {
    type: String,
  },
  OleCTisTARDEsPH_phone: {
    type: String,
    required: [true, 'phone field is required'],
  },
  OleCTisTARDEsPH_question_1: {
    type: String,
    required: [true, 'question_1 field is required'],
  },
})

module.exports = model('Lead', Lead)
