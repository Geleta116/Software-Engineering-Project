import React, { Component } from "react";
class LogOut extends Component {
  state = {};
  componentDidMount() {
    localStorage.removeItem("token");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default LogOut;
