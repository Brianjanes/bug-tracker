import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return !isAuthenticated ? (
    <button
      onClick={() => {
        loginWithRedirect();
      }}
    >
      login
    </button>
  ) : (
    <button
      onClick={() => {
        logout();
      }}
    >
      logout
    </button>
  );
};

export default LoginButton;
