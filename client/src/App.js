import LoginButton from "./authentication/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import GlobalStyles from "./GlobalStyles";
import Bugs from "./routes/Bugs";

const App = () => {
  const { isLoading, error } = useAuth0();
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bugs" element={<Bugs />} />
        </Routes>
        {/* {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && <LoginButton />} */}
      </Container>
    </BrowserRouter>
  );
};

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;
`;

export default App;
