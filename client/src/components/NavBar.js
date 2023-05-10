import React from "react";
import styled from "styled-components";
import LoginButton from "../authentication/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <Container>
      <Title>bug-tracker</Title>
      {user && isAuthenticated && (
        <LoginButtonDiv>
          <LoginButton />
        </LoginButtonDiv>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 125px;
  border-bottom: 2px solid lightgray;
  background-color: whitesmoke;
`;

const Title = styled.div`
  font-size: 2.5rem;
  margin-left: 40%;
`;

const LoginButtonDiv = styled.div`
  margin-right: 5rem;
`;

export default NavBar;
