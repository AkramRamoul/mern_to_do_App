const Todo = require("../model/todomodel");

async function editodo(req, res) {
  try {
    const todo = await Todo.findById(req.params.Id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    if (req.body.completed !== undefined) {
      todo.completed = req.body.completed;
    }
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { editodo };
