import { useEffect, useState } from "react";

const Form = ({ theme, addTodo, edit, updateTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? updateTodo({
          id: edit.todo.id,
          text,
        })
      : addTodo(text);

    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <input
        placeholder="Enter Text Here.."
        type="text"
        className="form-control my-3 rounded-0"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button
        className={
          theme
            ? "btn btn-dark rounded-0 w-100"
            : "btn btn-success rounded-0 w-100"
        }
      >
        Save
      </button>
    </form>
  );
};

export default Form;
