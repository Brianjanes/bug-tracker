import React, { useState } from "react";
import NewBugModal from "../components/NewBugModal";
import styled from "styled-components";

const Bugs = () => {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <NewBugModal modal={modal} setModal={setModal} />
    </Container>
  );
};
const Container = styled.div`
  width: min(100% - 2rem, 80%);
  margin-inline: auto;
`;

export default Bugs;
