import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import { Link } from "react-router-dom";

import { login } from "../services/auth";

class Login extends Component {
  state = { account: { email: "", password: "" }, errors: {} };
  schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),
    password: Joi.string().min(8).max(30).required().label("Password"),
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };
  doSubmit = async () => {
    try {
      const jwt = await login(
        this.state.account.email,
        this.state.account.password
      );
      console.log(jwt);
      window.location.href = "/home";
    } catch (error) {
      const { response } = JSON.parse(JSON.stringify(error));

      if (response && response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = response.data;
        this.setState({ errors });
      }
    }
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.target);

    if (errorMessage) errors[e.target.name] = errorMessage;
    else delete errors[e.target.name];

    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account, errors });
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    const errors = {};
    if (!error) return null;
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const subSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, subSchema);
    return error ? error.details[0].message : null;
  };
  render() {
    return (
      <div
        className="login"
        /* style={{ border: "solid red 2px", background: "black" }} */
      >
        <div>
          <form onSubmit={this.handleSubmit} className="w-100 mb-5">
            <div className="form-group mt-5 ">
              <Input
                onChange={this.handleChange}
                label="Email"
                error={this.state.errors.email}
                type="text"
                name="email"
                id="email"
                placeholder="E-mail address"
                className="input"
              />
            </div>
            {}
            <div className="alert"></div>
            <div className="form-group">
              <Input
                onChange={this.handleChange}
                label="Password"
                error={this.state.errors.password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="input mb-2"
              />
            </div>
            <button type="submit" className="custom-btn">
              Sign in
            </button>
            <div>
              <Link to="" className="link">
                Forgot password?
              </Link>
            </div>
          </form>

          <div className="footer-border">
            <p>
              Don't have an account? <Link to="/join">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
