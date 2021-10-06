import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { setUserSession } from "../../utils/Common";
import MyAlert from "../../utils/MyAlert";

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    setLoading(true);
    axios
      .post("https://ttmg-backend.herokuapp.com/api/auth/staffLogin", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        setUserSession(response.data.token, response.data.staff.email);
        props.history.push("/profile");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
        if (error.response.status === 400)
          setNotify({
            isOpen: true,
            message: "Some of the fields are missing!!",
            type: "error",
          });
        else if (error.response.status === 401)
          setNotify({
            isOpen: true,
            message: "Email or Password is incorrect!!",
            type: "error",
          });
        else
          setNotify({
            isOpen: true,
            message: "Something went wrong!",
            type: "error",
          });
      });
  };

  return (
    <div className="container login-max-width">
      <div className="row">
        <div className="col-md-6 col-xs-8 col-xs-12 border-right">
          <div className="mb-3 row">
            <label
              htmlFor="staffEmail"
              className="col-sm-3 col-xs-12 col-form-label login-label"
            >
              Email
            </label>
            <div className="col-md-8 col-sm-9 col-xs-12">
              <input
                type="email"
                name="email"
                className="form-control"
                id="staffEmail"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label
              htmlFor="staffPassword"
              className="col-sm-3 col-xs-12 col-form-label login-label"
            >
              Password
            </label>
            <div className="col-sm-9 col-md-8 col-xs-12">
              <input
                type="password"
                name="password"
                className="form-control"
                id="staffPassword"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-3 row d-flex justify-content-center">
            <div className="col-md-8">
              <input
                type="button"
                value={loading ? "Loading..." : "Sign-in"}
                className="login-form-btn"
                onClick={handleLogin}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center mb-3 offset-md-1">
          <input
            type="button"
            value="Sign-in with face detect"
            className="login-form-btn"
          />
        </div>
      </div>
      <MyAlert notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default Login;
