import { useState } from "react";

function TodoForm({ onSubmit }) {
  const [newitem, setNewitem] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newitem);
    setNewitem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newitem}
        onChange={(e) => setNewitem(e.target.value)}
        className="input"
        type="text"
        placeholder="Write your todo's here ...."
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}

export default TodoForm;
