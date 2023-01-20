import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <div
        style={{
          position: "sticky",
        }}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/home" className="navbar-brand">
            NavBar
          </NavLink>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/home" className="nav-link active">
                Home
              </NavLink>
              <NavLink to="/books" className="nav-link active">
                Books
              </NavLink>
              <NavLink to="/videos" className="nav-link active">
                Videos
              </NavLink>
              {!user && (
                <React.Fragment>
                  <NavLink to="/login" className="nav-link active">
                    Login
                  </NavLink>
                  <NavLink to="/register" className="nav-link active">
                    Register
                  </NavLink>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <NavLink to="/profile" className="nav-link active">
                    {user.fullName}
                  </NavLink>
                  <NavLink to="/logout" className="nav-link active">
                    Logout
                  </NavLink>
                </React.Fragment>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
