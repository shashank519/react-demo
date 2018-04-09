import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from "material-ui/Snackbar";
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import {
  fillDetails,
  registerUsers,
  clearRegistrationForm,
  handleNotificationClose,
  resetRegistrationForm
} from "../../actions/register-user-actions";

const style = {
  margin: 12,
};

class Register extends React.Component {
  changeField(event) {
    this.props.fillDetails(event.target.name, event.target.value);
    // [event.target.name] = event.target.value;
  }

  registerUser() {
    const { firstName, lastName, email, address, mobile, password } = this.props;
    if(!(email.length && password.length)){
      this.toggleNotification(false, 'Email and Password are mandatory.')
      return;
    }
    this.props.registerUsers({ firstName, lastName, email, address, mobile, password });
  }

  clearRegistrationForm() {
    this.props.clearRegistrationForm();
  }

  toggleNotification(val, msg){
    let msgStr = '';
    if(msg && msg.length){
      msgStr = msg;
    }
    this.props.handleNotificationClose(val, msgStr);
  }

  reserRegForm(){
    this.props.resetRegistrationForm();
  }

  render() {
    const { firstName, lastName, email, address, mobile, password, notifyMessage, showNotification } = this.props;
    return <div>
        <TextField hintText="First Name" name="firstName" onChange={e => this.changeField(e)} value={firstName} floatingLabelText="First Name" />
        <br />
        <TextField hintText="Last Name" name="lastName" onChange={e => this.changeField(e)} value={lastName} floatingLabelText="Last Name" />
        <br />
        <TextField hintText="Email" name="email" onChange={e => this.changeField(e)} value={email} floatingLabelText="Email" />
        <br />
        <TextField hintText="Password" name="password" onChange={e => this.changeField(e)} value={password} type="password" floatingLabelText="Password" />
        <br />
        <TextField hintText="Address" name="address" onChange={e => this.changeField(e)} value={address} floatingLabelText="Address" />
        <br />
        <TextField hintText="Mobile" name="mobile" onChange={e => this.changeField(e)} value={mobile} floatingLabelText="Mobile" />
        <br />
        <RaisedButton label="Register" primary={true} style={style} onClick={() => this.registerUser()} />
        <RaisedButton label="Clear" secondary={true} style={style} onClick={() => {
            this.clearRegistrationForm();
          }} />
        <RaisedButton label="Reset" secondary={true} style={style} onClick={() => {
            this.reserRegForm();
          }} />
        <Snackbar open={showNotification} message={ notifyMessage } autoHideDuration={4000} onRequestClose={()=>this.toggleNotification(false)} />
      </div>;
  }
}

const mapStateToProps = ({regUserReducer}) => {
	const {firstName, lastName, email, mobile, address, password, notifyMessage, showNotification} = regUserReducer;

	return {firstName, lastName, email, mobile, address, password, notifyMessage, showNotification};
}

export default withRouter(
  connect(mapStateToProps, {
    fillDetails,
    registerUsers,
    clearRegistrationForm,
    handleNotificationClose,
    resetRegistrationForm
  })(Register)
);