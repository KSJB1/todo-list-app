// TodoList.js
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter a new todo'
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
