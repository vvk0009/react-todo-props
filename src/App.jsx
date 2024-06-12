import { useState } from "react";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    theme ? setTheme(false) : setTheme(true);
  };

  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  // Add Todo
  const addTodo = (text) => {
    setTodos([{ id: crypto.randomUUID(), text }, ...todos]);
  };

  // Delete Todo
  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // Edit
  const editTodo = (todo) => {
    setEdit({
      todo: todo,
      isEdit: true,
    });
  };

  // Update Todo
  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((item) => (item.id === updatedTodo.id ? updatedTodo : item))
    );
    setEdit({ todo: {}, isEdit: false });
  };

  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div
        id="container"
        className={
          theme ? "container-fluid p-5 bg-secondary" : "container-fluid p-5"
        }
      >
        <Form
          theme={theme}
          addTodo={addTodo}
          edit={edit}
          updateTodo={updateTodo}
        />
        <ListGroup
          theme={theme}
          todos={todos}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      </div>
    </>
  );
};

export default App;
