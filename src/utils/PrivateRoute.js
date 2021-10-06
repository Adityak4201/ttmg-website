import React from "react";
import { Redirect, Route, NavLink } from "react-router-dom";
import { getToken, removeUserSession } from "./Common";

const PrivateRoute = ({ component: Component, ...rest }) => {
  //   useEffect(() => {
  //     if (!user || !token) removeUserSession();
  //   }, [token, user]);

  const handleLogout = () => {
    removeUserSession();
  };

  return (
    <>
      <div className="header">
        <NavLink onClick={handleLogout} to="/login">
          Logout
        </NavLink>
      </div>
      <Route
        {...rest}
        render={(props) =>
          getToken(getToken) ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
