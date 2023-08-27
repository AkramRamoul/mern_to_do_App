const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { gettodo } = require("./controller/gettodo");
const { createtodo } = require("./controller/createto");
const { deletetodo } = require("./controller/delete");
const { editodo } = require("./controller/edittodo");

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.get("/todo", gettodo);
app.post("/todo", createtodo);
app.delete("/todo/:Id", deletetodo);
app.patch("/todo/:Id", editodo);

const DBURL = process.env.DATABASE_URL; // Fix the variable name here
mongoose
  .connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("listening on port 5000");
    app.listen(5000);
  });
