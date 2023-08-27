const Todo = require("../model/todomodel");

async function deletetodo(req, res) {
  const Id = req.params.Id;
  try {
    await Todo.deleteOne({ _id: Id });
    res.json({ message: "Entry successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
module.exports = { deletetodo };
