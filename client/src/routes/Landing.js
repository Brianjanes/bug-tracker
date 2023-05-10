import React from "react";
import styled from "styled-components";
import LoginButton from "../authentication/LoginButton";

const Landing = () => {
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
