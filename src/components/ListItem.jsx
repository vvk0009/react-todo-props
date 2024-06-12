const ListItem = ({ theme, todo, removeTodo, editTodo }) => {
  return (
    <li
      className={
        theme
          ? "list-group-item rounded-0 bg-dark text-light"
          : "list-group-item rounded-0"
      }
    >
      {todo.text}
      <span className="float-end">
        <button
          className="btn btn-sm btn-warning rounded-0"
          onClick={() => editTodo(todo)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger rounded-0"
          onClick={() => removeTodo(todo.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
