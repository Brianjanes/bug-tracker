import React, { useState, useEffect } from "react";
import NewBugModal from "../components/NewBugModal";
import styled from "styled-components";

const Bugs = () => {
  const [modal, setModal] = useState(false);
  const [createdTickets, setCreatedTickets] = useState("");

  const showModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  useEffect(() => {
    fetch("/get-tickets")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data.data);
          setCreatedTickets(data.data);
        }
      });
  }, []);

  return (
    <Container>
      {createdTickets?.map((ticket, id) => {
        return (
          <TicketDiv key={id}>
            <TicketCreator>{ticket.creator}</TicketCreator>
            <TicketTime>{ticket.time}</TicketTime>
            <TicketDescription>{ticket.description}</TicketDescription>
            <TicketPriority>{ticket.priority}</TicketPriority>
          </TicketDiv>
        );
      })}
      {modal && <NewBugModal modal={modal} setModal={setModal} />}
      <button
        onClick={(e) => {
          showModal(e);
        }}
      >
        create new ticket
      </button>
    </Container>
  );
};
const Container = styled.div`
  width: min(100% - 2rem, 80%);
  margin-inline: auto;
`;

const TicketDiv = styled.div`
  display: flex;
`;
const TicketCreator = styled.div``;
const TicketTime = styled.div``;
const TicketDescription = styled.div``;
const TicketPriority = styled.div``;

export default Bugs;
