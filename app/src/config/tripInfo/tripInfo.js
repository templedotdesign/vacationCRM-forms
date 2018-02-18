import * as Constants from '../../constants/reservationForm/reservationForm';

export default {
  departureMonth: {
    attributes: {},
    elementType: 'select',
    label: 'Departure Month:',
    options: Constants.MONTHS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  departureDay: {
    attributes: {},
    elementType: 'select',
    label: 'Departure Day:',
    options: Constants.DAYS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  departureYear: {
    attributes: {},
    elementType: 'select',
    label: 'Departure Year:',
    options: Constants.EXP_YEARS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  returnMonth: {
    attributes: {},
    elementType: 'select',
    label: 'Return Month:',
    options: Constants.MONTHS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  returnDay: {
    attributes: {},
    elementType: 'select',
    label: 'Return Day:',
    options: Constants.DAYS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  returnYear: {
    attributes: {},
    elementType: 'select',
    label: 'Return Year:',
    options: Constants.EXP_YEARS,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  beddingType: {
    attributes: {},
    elementType: 'select',
    label: 'Preferred Bedding Type:',
    options: Constants.BEDDING_TYPES,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  departureAirport: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Departure Airport:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  destinationAirport: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Destination Airport:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  vacationType: {
    attributes: {},
    elementType: 'select',
    label: 'Vacation Type:',
    options: Constants.VACATION_TYPES,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  military: {
    attributes: {},
    elementType: 'select',
    label: 'Active Military / Veteran?',
    options: Constants.YES_NO,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  insurance: {
    attributes: {},
    elementType: 'select',
    label: 'Do You Want Travel Insurance?',
    options: Constants.YES_NO_INSURANCE,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  }
}