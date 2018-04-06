import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import Drawer from "material-ui/Drawer";
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import UsersList from "./pages/users-list/users-list";

import {toggleDrawer} from './actions/app-drawer';
import './App.css';

class LoginDisp extends Component {
  static muiName = "FlatButton";

  render() {
    return <FlatButton {...this.props} label="Login" />;
  }
}

const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = "IconMenu";

class App extends Component {
  toggleDrawer(){
    this.props.toggleDrawer();
  }

  redirectToRoute(route){
    this.props.history.push(route);
  }

  render() {
    const { isDrawerOpen } = this.props;
    return <div className="App">
        <div>
          <Drawer docked={false} width={200} open={isDrawerOpen} onRequestChange={() => this.toggleDrawer()}>
            <MenuItem onClick={() => this.redirectToRoute("/")}>
              Home
            </MenuItem>
            <MenuItem onClick={() => this.redirectToRoute("/register")}>
              Register
            </MenuItem>
            <MenuItem onClick={() => this.redirectToRoute("/login")}>
              Login
            </MenuItem>
            <MenuItem onClick={() => this.redirectToRoute("/users")}>
              Users
            </MenuItem>
          </Drawer>
          <AppBar iconElementRight={false ? <Logged /> : <LoginDisp />} onLeftIconButtonClick={() => this.toggleDrawer()} onRightIconButtonClick={() => this.redirectToRoute("/login")}>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/users" component={UsersList} />
          </Switch>
        </div>
      </div>;
  }
}

const mapStateToProps = ({ appDrawer }) => {
  const { isDrawerOpen } = appDrawer;

  return { isDrawerOpen };
};
export default withRouter(connect(mapStateToProps, { toggleDrawer })(App));
