import { useEffect, useState } from "react";
import "./App.css";
import { gettodo } from "./api/gettodo";
import { createtodo } from "./api/createtodo";
import { deletetodo } from "./api/deletetodo";
import { editodo } from "./api/edittodo";
import TodoForm from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [todos, settodos] = useState([]);

  useEffect(() => {
    async function fetchtodo() {
      const newtodo = await gettodo();
      settodos(newtodo);
    }
    fetchtodo();
  }, []);
  async function handledelete(id) {
    await deletetodo(id);
    settodos((curr) => {
      return curr.filter((todo) => todo._id !== id);
    });
  }

  async function toggle(id, completed) {
    await editodo(id, completed);

    settodos((current) => {
      return current.map((todo) => {
        if (todo._id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  async function handleSubmit(newitem) {
    await createtodo(newitem, false);
    try {
      const updatedTodoList = await gettodo();
      settodos(updatedTodoList);
    } catch (error) {
      console.error("Error fetching updated todo list:", error);
    }
  }

  return (
    <>
      <h1 className="title">📓 Todo List</h1>
      <div className="inside">
        <TodoForm onSubmit={handleSubmit} />
        <TodoList todos={todos} toggle={toggle} handledelete={handledelete} />
      </div>
    </>
  );
}

export default App;
