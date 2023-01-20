import React, { Component } from "react";
class Ellipsis extends Component {
  state = {};
  render() {
    return (
      <i
        className="fa fa-ellipsis-v"
        style={{
          color: "white",
          marginLeft: "10px",
          fontSize: "x-large",
          cursor: "pointer",
        }}
      ></i>
    );
  }
}

export default Ellipsis;
