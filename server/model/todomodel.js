const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  date: { type: Date, default: Date.now },
});

const Todo = mongoose.model("Todo", todoschema);

module.exports = Todo;
