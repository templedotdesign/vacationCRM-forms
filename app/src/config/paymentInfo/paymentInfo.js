import * as Constants from '../../constants/reservationForm/reservationForm';

export default {
  ccNumber: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Credit Card Number:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  ccExpirationMonth: {
    attributes: {},
    elementType: 'select',
    label: 'Expiration Month:',
    options: Constants.MONTHS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  ccExpirationYear: {
    attributes: {},
    elementType: 'select',
    label: 'Expiration Year:',
    options: Constants.EXP_YEARS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  ccv: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'CCV:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  ccName: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Name On Card:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  billingAddress: {
    attributes: {},
    elementType: 'select',
    label: 'Billing Address Same As Contact Address:',
    options: Constants.YES_NO,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  ccAmount: {
    attributes: {},
    elementType: 'select',
    label: 'Pay In Full Or Deposit:',
    options: Constants.PAYMENT_AMOUNTS,
    touched: false,
    value: 'Deposit',
    validation: {
      required: false
    },
    valid: false
  },
}