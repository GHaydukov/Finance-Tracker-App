require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");

const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Listening to port: " + PORT);
  });
};

server();
