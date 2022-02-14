import { useRef, useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(text);

    setText("");

    inputRef.current.focus();
  };

  return (
    <form className="grid" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ajouter une tâche"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button>Ajouter</button>
    </form>
  );
};

export default TaskForm;
