const LeadSchema = {
  firstname: {
    in: ['body'],
    isLength: {
      errorMessage: 'firstname must be at least greater than 4 characters',
      options: { min: 4 },
    },
  },
  lastname: {
    in: ['body'],
    isLength: {
      errorMessage: 'lastname must be at least greater than 4 characters',
      options: { min: 4 },
    },
  },
  email: {
    in: ['body'],
    isLength: {
      errorMessage: 'email must be at least greater than 5 characters',
      options: { min: 5 },
    },
    isEmail: {
      bail: true,
    },
  },
  country: {
    in: ['body'],
    isLength: {
      errorMessage: 'country must be at least greater than 2 characters',
      options: { min: 2 },
    },
  },
  company: {
    in: ['body'],
    isLength: {
      errorMessage: 'company must be at least greater than 4 characters',
      options: { min: 4 },
    },
  },
  phone: {
    in: ['body'],
    isInt: true,
  },
  question_1: {
    in: ['body'],
    isLength: {
      errorMessage: 'question_1 must be at least greater than 5 characters',
      options: { min: 5 },
    },
  },
}

module.exports = { LeadSchema }
