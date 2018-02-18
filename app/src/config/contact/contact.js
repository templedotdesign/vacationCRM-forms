import * as Constants from '../../constants/reservationForm/reservationForm';

export default {
  country: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Your Country:',
    options: [],
    touched: false,
    value: 'USA',
    validation: {
      required: false
    },
    valid: false
  },
  street: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Street Address:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  city: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'City:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  state: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'State:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  zip: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Zip Code:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true,
      zip: true
    },
    valid: false
  },
  email1: {
    attributes: {
      type: 'email',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Email:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true,
      email: true
    },
    valid: false
  },
  email2: {
    attributes: {
      type: 'email',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Email 2:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  phone1: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Phone 1:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  phone2: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Phone 2:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  phoneType: {
    attributes: {},
    elementType: 'select',
    label: 'Primary Phone Is:',
    options: Constants.CELL_HOME,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  }
}