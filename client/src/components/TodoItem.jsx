import PropTypes from "prop-types";

function TodoItem({ completed, _id, title, toggle, handledelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggle(_id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => handledelete(_id)}>X</button>
    </li>
  );
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  handledelete: PropTypes.func.isRequired,
};

export default TodoItem;
