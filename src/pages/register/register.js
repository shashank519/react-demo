import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
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
		const {firstName, lastName, age, address, mobile} = this.props;
		this.props.registerUsers({firstName, lastName, age, address, mobile});
	}

	clearRegistrationForm(){
		this.props.clearRegistrationForm();
	}

  render() {
  	const {firstName, lastName, age, address, mobile} = this.props;
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
		      hintText="Age"
		      name="age"
		      onChange={(e)=>this.changeField(e)}
		      value={age}
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
	const {firstName, lastName, age, mobile, address} = regUserReducer;

	return {firstName, lastName, age, mobile, address};
}

export default connect(mapStateToProps, {fillDetails, registerUsers, clearRegistrationForm})(Register)