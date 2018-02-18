import * as Constants from '../../constants/reservationForm/reservationForm';

export default {
  tripType: {
    attributes: {},
    elementType: 'select',
    label: 'Accommodations:',
    options: Constants.LODGING_CRUISE,
    touched: false,
    value: '',
    validation: {
      required: true
    },
    valid: false
  }
}