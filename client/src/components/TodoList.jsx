import TodoItem from "./todoitem";

export default function TodoList({ todos, toggle, handledelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo._id}
          toggle={toggle}
          handledelete={handledelete}
        />
      ))}
    </ul>
  );
}
