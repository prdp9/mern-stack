import React from "react";
import { useAuth } from "../hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/slices/auth";

const AboutPage = () => {
  const {
    isAuthenticated: contextIsAuthenticated,
    login: contextLogin,
    logout: contextLogout,
    user,
  } = useAuth();

  const { isAuthenticated, user: reduxUser } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const handleReduxLogin = () => {
    dispatch(login());
  };

  const handleReduxLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>This is about page</h2>
      <h2>
        {contextIsAuthenticated
          ? "context user is logged in"
          : "context user is not logged in"}
      </h2>

      <h2>Name: {user.name}</h2>
      {contextIsAuthenticated ? (
        <button onClick={contextLogout}>Context Logout</button>
      ) : (
        <button onClick={contextLogin}>Context Login</button>
      )}
      <h2>
        {isAuthenticated
          ? "redux user is logged in"
          : "redux user is not logged in"}
      </h2>

      <h2>Redux User Name: {reduxUser.name}</h2>
      {isAuthenticated ? (
        <button onClick={handleReduxLogout}>Redux Logout</button>
      ) : (
        <button onClick={handleReduxLogin}>Redux Login</button>
      )}
    </div>
  );
};

export default AboutPage;
