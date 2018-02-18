import * as Constants from '../../constants/reservationForm/reservationForm';

export default {
  resort: {
    attributes: {
      type: 'text',
      placeholder: ''
    },
    elementType: 'input',
    label: 'Preferred Cruise:',
    options: [],
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  },
  roomType: {
    attributes: {},
    elementType: 'select',
    label: 'Cabin Type:',
    options: Constants.CABIN_TYPES,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  },
  airfare: {
    attributes: {},
    elementType: 'select',
    label: 'Do You Need Airfare?',
    options: Constants.YES_NO_AIRFARE,
    touched: false,
    value: '',
    validation: {
      required: false
    },
    valid: false
  }
}