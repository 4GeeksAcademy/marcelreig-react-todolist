import React from "react";

//create your first component
const Todo = () => {
  // Crear un estado para almacenar los elementos de la lista de tareas
  const [todos, setTodos] = React.useState([]);
  // Crear un estado para almacenar el valor del input
  const [inputValue, setInputValue] = React.useState("");
  // Crear una función para manejar la adición de un nuevo elemento a la lista de tareas
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue(""); // Limpiar el input después de añadir la tarea
    }
  };
  // Crear una función para manejar la eliminación de un elemento de la lista de tareas
  const removeTodo = (index) => {
    const newTodos = todos.filter((element, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1 className="text-center mt-5 todo-app__title">todos</h1>
      <div className="todo-app__box mx-auto">
        <input
          type="text"
          className="todos__input"
          placeholder="Añadir nueva tarea"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="todo-list__item d-flex justify-content-between align-items-center"
            >
              <span className="todo-list__text">{todo}</span>
              <span
                className="todo-list__remove"
                onClick={() => removeTodo(index)}
              >
                <i class="fa-solid fa-xmark"></i>
              </span>
            </li>
          ))}
        </ul>
        <div className="todo-app__footer">
          Tareas pendientes: {todos.length}
        </div>
      </div>
    </div>
  );
};

export default Todo;
