import React, { useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { FiX } from "react-icons/fi";

const NewBugModal = ({ modal, setModal }) => {
  const { user } = useAuth0();

  const [input, setInput] = useState({
    creator: user?.email,
    time: new Date().toDateString(),
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

  const handleClose = (e) => {
    e.preventDefault();
    setModal(!modal);
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
        <ExitDiv>
          <Xicon
            onClick={(e) => {
              handleClose(e);
            }}
          />
        </ExitDiv>

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
        </InputForm>
      </Container>
      <ButtonDiv>
        <SubmitButton onClick={(e) => handleNewTicket(e)}>submit</SubmitButton>
      </ButtonDiv>
    </Main>
  );
};

const Main = styled.div`
  width: 500px;
  height: 350px;
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  margin: 25px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExitDiv = styled.div`
  padding: 10px;
`;
const Xicon = styled(FiX)`
  padding: 10px;
  float: right;
  cursor: pointer;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputDescription = styled.div`
  font-size: 1rem;
`;
const InputPriority = styled.div`
  font-size: 1rem;
  padding-bottom: 20px;
`;

const UserInput = styled.textarea`
  width: 350px;
  height: 125px;
  margin: 10px;
  font-size: 1rem;
`;

const DropdownWrapper = styled.select`
  max-width: 60%;
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

const ButtonDiv = styled.div`
  padding: 5px;
`;
const SubmitButton = styled.button`
  float: right;
`;
export default NewBugModal;
