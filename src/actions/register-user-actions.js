import axios from 'axios';

export const fillDetails = (name, value) => {
	return{
		type: 'FILL_DETAILS',
		name,
		value
	}
}

export const registerUsers = (userInfo) => {
	return (dispatch) => {
		axios.post('http://localhost:3002/users/register', userInfo).then((resp, err)=>{
			if(err){
				console.log('Error occured while registering :- client side');
				return;
			} else if(resp) {
				dispatch({ type: "REGISTER_USER", payload : resp });
			}
		})
	}
}

export const clearRegistrationForm = () => {
	return{
		type: 'CLEAR_REGISTEATION_FORM'
	}
}

export const handleNotificationClose = (val, msg) => {
	return { type: "TOGGLE_NOTIFICATION", val: val, msg: msg };
}

export const resetRegistrationForm = () => {
	return {type: 'RESET_REGISTRATION_FORM'}
}