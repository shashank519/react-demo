import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import UsersList from "./pages/users-list/users-list";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <AppBar>
              <MenuItem><Link to="/">Home</Link></MenuItem>
              <MenuItem><Link to="/register">Register</Link></MenuItem>
              <MenuItem><Link to="/login">Login</Link></MenuItem>
              <MenuItem><Link to="/users">Users</Link></MenuItem>
            </AppBar>

            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/users" component={UsersList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
