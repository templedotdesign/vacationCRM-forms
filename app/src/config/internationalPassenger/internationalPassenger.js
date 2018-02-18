import * as Constants from '../../constants/reservationForm/reservationForm';

export default {
  firstName: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'First Name:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  middleName: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Middle Name:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  lastName: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Last Name:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  suffix: {
    attributes: {},
    elementType: 'select',
    label: 'Suffix:',
    options: Constants.SUFFIXES,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  birthMonth: {
    attributes: {},
    elementType: 'select',
    label: 'Birth Month:',
    options: Constants.MONTHS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  birthDay: {
    attributes: {},
    elementType: 'select',
    label: 'Birth Day:',
    options: Constants.DAYS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  birthYear: {
    attributes: {},
    elementType: 'select',
    label: 'Birth Year:',
    options: Constants.YEARS(),
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  gender: {
    attributes: {},
    elementType: 'select',
    label: 'Gender:',
    options: Constants.GENDER_TYPES,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  passportNum: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Passport Number:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  passportState: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Passport Issuing Authority:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  expMonth: {
    attributes: {},
    elementType: 'select',
    label: 'Passport Expiration Month:',
    options: Constants.MONTHS,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  expDay: {
    attributes: {},
    elementType: 'select',
    label: 'Passport Expiration Day:',
    options: Constants.DAYS,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  expYear: {
    attributes: {},
    elementType: 'select',
    label: 'Passport Expiration Year:',
    options: Constants.EXP_YEARS,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
}