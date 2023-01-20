import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { register } from "../services/userService";
import { loginJWT } from "../services/auth";
import { head } from "lodash";
class SignUp extends Component {
  state = {
    account: { fullname: "", email: "", password: "" },
    errors: {},
  };
  schema = {
    fullname: Joi.string().required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
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
    console.log(this.state.account);
    try {
      const { headers } = await register(this.state.account);
      loginJWT(headers["x-token"]);
      window.location.href = "/home";
    } catch (error) {
      const { response } = JSON.parse(JSON.stringify(error));
      console.log(response);
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
      <div className="login">
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-5 ">
              <Input
                onChange={this.handleChange}
                label="Full Name"
                error={this.state.errors.fullname}
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className="input"
              />
            </div>
            <div className="form-group">
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
            <button type="submit" className="custom-btn join-btn">
              Join
            </button>
          </form>
          <div className="footer-border">
            <p>
              Already have an account? <Link to="/signin">Sign-in</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
