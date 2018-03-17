const registerUser = {
  firstName: 'Shashank',
  lastName: 'Dave',
  age: 0,
  address: 'Udaipur(Rajasthan)',
  mobile: 0
};

const registerUserReducer = (state = registerUser, action) => {
  switch (action.type) {
    case 'FILL_DETAILS' : 
      return {...state, [action.name]: action.value};
    case 'REGISTER_USER' : {
    	return {...state};
    }
    case 'CLEAR_REGISTEATION_FORM' : {
    	return {...state, firstName: '', lastName: '', age: '', address: '', mobile: ''};
    }
    default:
      return state
  }
}
 
export default registerUserReducer;