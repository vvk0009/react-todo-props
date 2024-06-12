import ListItem from "./ListItem";

const ListGroup = ({ theme, todos, removeTodo, editTodo }) => {
  if (todos.length === 0) {
    return <h1 className="display-6 text-center">No Todos Yet..</h1>;
  }

  return (
    <ul className="my-3 list-group">
      {todos.map((todo) => (
        <ListItem
          theme={theme}
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ListGroup;
