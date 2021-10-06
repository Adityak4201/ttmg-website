import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container login-max-width">
      <div className="row">
        <div className="col-md-6 col-xs-8 col-xs-12 border-right">
          <div className="mb-3 row">
            <label
              for="staffEmail"
              className="col-sm-3 col-xs-12 col-form-label"
            >
              Email
            </label>
            <div className="col-md-8 col-sm-9 col-xs-12">
              <input
                type="email"
                readonly
                className="form-control"
                id="staffEmail"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              for="staffPassword"
              className="col-sm-3 col-xs-12 col-form-label"
            >
              Password
            </label>
            <div className="col-sm-9 col-md-8 col-xs-12">
              <input
                type="password"
                className="form-control"
                id="staffPassword"
              />
            </div>
          </div>
          <div className="mb-3 row d-flex justify-content-center">
            <div className="col-md-8">
              <input type="button" value="Sign-in" />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-8 col-xs-12 d-flex align-items-center justify-content-center mb-3 offset-md-1">
          <input type="button" value="Sign-in with face detect" />
        </div>
      </div>
    </div>
  );
};

export default Login;
