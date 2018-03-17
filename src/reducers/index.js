import { combineReducers } from 'redux';
import registerUserReducer from './register-user';

export default combineReducers({
  regUserReducer: registerUserReducer
})