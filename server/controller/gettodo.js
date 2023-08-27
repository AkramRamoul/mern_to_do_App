const Todo = require("../model/todomodel");

async function gettodo(req, res) {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { gettodo };
