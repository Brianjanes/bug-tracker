import React, { useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const NewBugModal = ({ modal, setModal }) => {
  const { user } = useAuth0();

  const [input, setInput] = useState({
    creator: user?.email,
    time: new Date().toLocaleString(),
    description: "",
    priority: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      setInput({
        ...input,
        description: value,
      });
    }
    if (name === "selectList") {
      setInput({
        ...input,
        priority: value,
      });
    }
  };

  const handleNewTicket = (e) => {
    e.preventDefault();
    fetch("/add-ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          setModal(!modal);
        }
      });
  };

  return (
    <Main>
      <Container>
        <InputForm>
          <InputDescription>description:</InputDescription>
          <DescriptionWrapper>
            <UserInput
              type="text"
              name="description"
              placeholder="description of the issue"
              onChange={(e) => handleInputChange(e)}
            />
          </DescriptionWrapper>
          <PriorityWrapper>
            <InputPriority>priotiry:</InputPriority>
            <DropdownWrapper
              name="selectList"
              id="selectList"
              onChange={(e) => handleInputChange(e)}
            >
              <PriorityOption value="high">high</PriorityOption>
              <PriorityOption value="medium">medium</PriorityOption>
              <PriorityOption value="low">low</PriorityOption>
            </DropdownWrapper>
          </PriorityWrapper>
          <button onClick={(e) => handleNewTicket(e)}>submit</button>
        </InputForm>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid lightgray;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputDescription = styled.div`
  font-size: 20px;
`;
const InputPriority = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
`;

const UserInput = styled.textarea`
  width: 300px;
  height: 150px;
  margin: 10px;
  font-size: 15px;
`;

const DropdownWrapper = styled.select`
  max-width: 50%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const PriorityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const PriorityOption = styled.option``;
export default NewBugModal;
