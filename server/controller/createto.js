const express = require("express");
const Todo = require("../model/todomodel");

async function createtodo(req, res) {
  const { title, completed } = req.body;
  const newtodo = new Todo({
    title: title,
    completed: completed,
  });
  try {
    await newtodo.save();
    res.status(201).json({ message: "created", todo: newtodo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { createtodo };
