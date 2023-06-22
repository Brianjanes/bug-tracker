import React, { useState, useEffect } from "react";
import NewBugModal from "../components/NewBugModal";
import styled from "styled-components";

const Bugs = () => {
  const [modal, setModal] = useState(false);
  const [createdTickets, setCreatedTickets] = useState([]);

  const showModal = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const fetchTickets = async () => {
    const settings = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    };
    try {
      const res = await fetch("/get-tickets", settings);
      const data = await res.json();
      data && setCreatedTickets(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // const fetchTickets = async (request, response) => {
    //   fetch("/get-tickets", {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //       "content-type": "application/json",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.status === 200) {
    //         setCreatedTickets(data.data);
    //       }
    //     });
    // };
    fetchTickets();
  }, []);

  const headers =
    createdTickets[0] &&
    Object.keys(createdTickets[0]).filter((header) => header !== "_id");

  return (
    <Container>
      {modal && <NewBugModal modal={modal} setModal={setModal} />}
      <button
        onClick={(e) => {
          showModal(e);
        }}
      >
        create new ticket
      </button>
      {createdTickets && (
        <Table>
          <tbody>
            <tr>
              {headers?.map((header, index) => {
                return <TableHeaders key={index}>{header}</TableHeaders>;
              })}
            </tr>
            {createdTickets?.map((ticket, index) => {
              const values = headers.map((header) => {
                return ticket[header];
              });
              return (
                <tr key={index}>
                  {values.map((cell, index) => {
                    return <TableContents key={index}>{cell}</TableContents>;
                  })}

                  <EditButton key={5}>edit</EditButton>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: min(100% - 2rem, 70%);
  margin-inline: auto;
  margin-top: 100px;
`;

const Table = styled.table`
  width: 100%;
`;

const TableHeaders = styled.th`
  border: 2px solid black;
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const TableContents = styled.td`
  border: 2px solid black;
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;
`;

const EditButton = styled.button`
  width: 60px;
  margin: 5px;
  text-align: center;
`;

export default Bugs;
