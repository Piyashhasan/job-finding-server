require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.SERVER_PORT;

// --- middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// --- root api ---
app.use("/", async (req, res) => {
  try {
    res.send("Hello Server... !");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, async () => {
  try {
    console.log(`Server is listening at PORT - ${PORT}`);
  } catch (error) {
    console.log("Error from server listening");
    console.log(error.message);
  }
});
