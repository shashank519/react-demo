import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { fillDetails, registerUsers, clearRegistrationForm } from '../../actions/register-user-actions';

const style = {
  margin: 12,
};

class Register extends React.Component {
	changeField(event) {
		this.props.fillDetails(event.target.name, event.target.value);
		// [event.target.name] = event.target.value;
	}

	registerUser() {
		const {firstName, lastName, email, address, mobile} = this.props;
		this.props.registerUsers({firstName, lastName, email, address, mobile});
	}

	clearRegistrationForm(){
		this.props.clearRegistrationForm();
	}

  render() {
  	const {firstName, lastName, email, address, mobile} = this.props;
    return (
      <div>
        <TextField
		      hintText="First Name"
		      name="firstName"
		      onChange={(e)=>this.changeField(e)}
		      value={firstName}
		    /><br />
		    <TextField
		      hintText="Last Name"
		      name="lastName"
		      onChange={(e)=>this.changeField(e)}
		      value={lastName}
		    /><br />
		    <TextField
		      hintText="Email"
		      name="email"
		      onChange={(e)=>this.changeField(e)}
		      value={email}
		    /><br />
		    <TextField
		      hintText="Address"
		      name="address"
		      onChange={(e)=>this.changeField(e)}
		      value={address}
		    /><br />
		    <TextField
		      hintText="Mobile"
		      name="mobile"
		      onChange={(e)=>this.changeField(e)}
		      value={mobile}
		    /><br />
		    <RaisedButton label="Register" primary={true} style={style} onClick={() => this.registerUser()} />
    		<RaisedButton label="Clear" secondary={true} style={style} onClick={() => {this.clearRegistrationForm()}}/>
      </div>
    );
  }
}

const mapStateToProps = ({regUserReducer}) => {
	const {firstName, lastName, email, mobile, address} = regUserReducer;

	return {firstName, lastName, email, mobile, address};
}

export default withRouter(
  connect(mapStateToProps, {
    fillDetails,
    registerUsers,
    clearRegistrationForm
  })(Register)
)