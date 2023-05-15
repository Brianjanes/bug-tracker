"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const db = client.db("bug-tracker");
const database = db.collection("database");

const createTicket = async (request, response) => {
  const { creator, time, description, priority } = request.body;
  try {
    await client.connect();
    const newTicket = {
      creator,
      time,
      description,
      priority,
    };
    const ticket = await database.insertOne(newTicket);
    if (!ticket.insertedId) {
      return response.status(502).json({
        status: 502,
        message: "Database error.",
      });
    } else {
      return response.status(200).json({
        status: 200,
        data: ticket,
      });
    }
  } catch (error) {
    return response.status(500).json({
      status: 500,
      message: "Internal Server Error.",
    });
  } finally {
    client.close();
  }
};

const getTickets = async (request, response) => {
  try {
    client.connect();
    const tickets = await database.find().toArray();
    console.log(tickets);
    if (!tickets) {
      return response.status(404).json({
        status: 404,
        message: "No tickets found.",
      });
    } else {
      return response.status(200).json({
        status: 200,
        data: tickets,
      });
    }
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      status: 500,
      message: "Internal Server Error.",
    });
  } finally {
    client.close();
  }
};

module.exports = { createTicket, getTickets };
