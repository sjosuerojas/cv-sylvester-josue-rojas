const LeadSchema = {
  inputName: {
    in: ['body'],
    isLength: {
      errorMessage: 'firstname must be at least greater than 4 characters',
      options: { min: 4 },
    },
  },
  inputLastname: {
    in: ['body'],
    isLength: {
      errorMessage: 'lastname must be at least greater than 4 characters',
      options: { min: 4 },
    },
  },
  inputEmail: {
    in: ['body'],
    isLength: {
      errorMessage: 'email must be at least greater than 5 characters',
      options: { min: 5 },
    },
    isEmail: {
      bail: true,
    },
  },
  inputCountry: {
    in: ['body'],
    isLength: {
      errorMessage: 'country must be at least greater than 2 characters',
      options: { min: 2 },
    },
  },
  inputPhone: {
    in: ['body'],
    isInt: true,
  },
  inputQuestion1: {
    in: ['body'],
    isLength: {
      errorMessage: 'question_1 must be at least greater than 5 characters',
      options: { min: 5 },
    },
  },
}

module.exports = { LeadSchema }
