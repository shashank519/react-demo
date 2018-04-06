import { combineReducers } from 'redux';
import registerUserReducer from './register-user';
import appDrawerReducer from "./app-drawer";

export default combineReducers({
  regUserReducer: registerUserReducer,
  appDrawer: appDrawerReducer
})