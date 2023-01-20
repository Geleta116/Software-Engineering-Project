import React, { Component } from "react";
class DropDown extends Component {
  state = {};
  render() {
    return (
      <select
        className="form-control form-control-lg "
        /* onChange={handleChange}
        defaultValue={teamSelection} */
        style={{ width: "50%", margin: "0 auto" }}
        /* disabled={disabled} */
      >
        <option value="">Show All</option>
        <option value="TeamA">Team A</option>
        <option value="TeamB">Team B</option>
        <option value="TeamC">Team C</option>
        <option value="TeamD">Team D</option>
      </select>
    );
  }
}

export default DropDown;
