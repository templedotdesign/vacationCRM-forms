import * as Constants from '../../constants/reservationForm/reservationForm';

export default {
  primaryAgent: {
    attributes: {},
    elementType: 'select',
    label: 'Who Is Your Travel Agent?',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  numOfPassengers: {
    attributes: {},
    elementType: 'select',
    label: 'Total Number of Passengers:',
    options: Constants.PASSENGER_COUNT,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  travelType: {
    attributes: {},
    elementType: 'select',
    label: 'International Or Domestic Travel?',
    options: Constants.TRAVEL_TYPES,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
}