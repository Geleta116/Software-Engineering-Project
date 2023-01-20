import { Redirect, Route, Switch } from "react-router-dom";

import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Books from "./components/books";
import Home from "./components/home";
import Login from "./components/login";
import NavBar from "./components/navbar";
import Videos from "./components/videos";
import SignUp from "./components/signup";
import LogOut from "./components/logout";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (e) {}
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="App">
          <header className="App-header">
            <NavBar user={this.state.user} />
            <Switch>
              <Route
                path="/videos"
                component={this.state.user ? Videos : Login}
              />
              <Route
                path="/books"
                component={this.state.user ? Books : Login}
              />
              <Route
                path="/home"
                exact
                component={this.state.user ? Home : Login}
              />
              <Route path="/register" exact component={SignUp} />
              <Route path="/login" exact component={Login} />
              <Route path="/logout" exact component={LogOut} />
              <Redirect from="/" exact to="/login" />
              <Redirect to="/login" />
            </Switch>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
