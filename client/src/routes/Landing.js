import React from "react";
import styled from "styled-components";
import LoginButton from "../authentication/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  // if (user) {
  //   navigate("/bugs");
  // }

  return (
    <Main>
      <LoginButton />
    </Main>
  );
};

const Main = styled.div`
  width: min(100% - 2rem, 80%);
  margin-inline: auto;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

export default Landing;
