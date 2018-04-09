const registerUser = {
  firstName: 'Shashank',
  lastName: 'Dave',
  email: 'shashank@gmail.com',
  address: 'Udaipur(Rajasthan)',
  mobile: 0,
  password: '',
  regUserResponse: {},
  showNotification: false,
  notifyMessage: ''
};

const registerUserReducer = (state = registerUser, action) => {
  switch (action.type) {
    case 'FILL_DETAILS' : 
      return {...state, [action.name]: action.value};
    case 'REGISTER_USER' : {
    	return {...state, regUserResponse: action.payload, notifyMessage: action.payload.data.message, showNotification : !state.showNotification};
    }
    case 'CLEAR_REGISTEATION_FORM' : {
    	return {...state, firstName: '', lastName: '', email: '', address: '', mobile: '', password: ''};
    }
    case 'TOGGLE_NOTIFICATION': {
      return{...state, showNotification: !state.showNotification, notifyMessage: action.msg};
    }
    case 'RESET_REGISTRATION_FORM': {
      return{...state, ...registerUser};
    }
    default:
      return state;
  }
}
 
export default registerUserReducer;