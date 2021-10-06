import React from "react";
import { Redirect, Route, NavLink } from "react-router-dom";
import "../App.css";
import { getToken } from "./Common";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
      <>
      <div className="header">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/login">
          Login
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About Us
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact Us
        </NavLink>
      </div>
      <Route
        {...rest}
        render={(props) =>
          !getToken(getToken) ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/profile" }} />
          )
        }
      />
      </>
  );
};

export default PublicRoute;