import React, { Component } from "react";
class Input extends Component {
  state = {};
  render() {
    const { onChange, label, error, name, type, id, placeholder, className } =
      this.props;
    return (
      <div>
        {/* <label htmlFor={id}>{label}</label> */}
        <input
          type={type}
          className={className}
          id={id}
          aria-describedby="emailHelp"
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        />
        {error && (
          <div className="alert alert-danger mt-3">
            {JSON.parse(JSON.stringify(error))}
          </div>
        )}
      </div>
    );
  }
}

export default Input;
