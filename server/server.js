"use strict";
const express = require("express");
const morgan = require("morgan");

const PORT = 8000;

//handlers being brought in
const { createTicket } = require("./handlers/tickethandlers.js");

const app = express();

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

// Any requests for static files will go into the public folder
app.use(express.static("public"));

//endpoints for tickets
app.post("/add-ticket", createTicket);

// this is a catch all endpoint.
app.get("*", (request, response) => {
  return response.status(404).json({
    status: 404,
    message: "Nothing to see here.",
  });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
