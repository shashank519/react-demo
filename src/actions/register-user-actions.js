import axios from 'axios';

export const fillDetails = (name, value) => {
	return{
		type: 'FILL_DETAILS',
		name,
		value
	}
}

export const registerUsers = (userInfo) => {
	// console.log(userInfo);
	return (dispatch) => {
		axios.post('http://localhost:3002/users/register', userInfo).then((resp, err)=>{
			if(err){
				console.log('Error occured while registering :- client side');
				return;
			} else if(resp) {
				console.log('Got response from api', resp);
				dispatch({
					type: 'REGISTER_USER'
				})
			}
		})
	}
}

export const clearRegistrationForm = () => {
	return{
		type: 'CLEAR_REGISTEATION_FORM'
	}
}