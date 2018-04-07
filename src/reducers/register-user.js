const registerUser = {
  firstName: 'Shashank',
  lastName: 'Dave',
  email: 'shashank@gmail.com',
  address: 'Udaipur(Rajasthan)',
  mobile: 0,
  regUserResponse: {},
  showNotification: false
};

const registerUserReducer = (state = registerUser, action) => {
  switch (action.type) {
    case 'FILL_DETAILS' : 
      return {...state, [action.name]: action.value};
    case 'REGISTER_USER' : {
    	return { ...state, regUserResponse: action.payload, showNotification : !state.showNotification};
    }
    case 'CLEAR_REGISTEATION_FORM' : {
    	return {...state, firstName: '', lastName: '', email: '', address: '', mobile: ''};
    }
    case 'SHOW_NOTIFICATION': {
      return{...state, showNotification: action.val};
    }
    default:
      return state;
  }
}
 
export default registerUserReducer;