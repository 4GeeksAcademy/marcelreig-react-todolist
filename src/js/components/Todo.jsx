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
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

	return (
		<div className="text-center w-25 mx-auto mt-5">
			<h1 className="text-center mt-5 lead">Todolist de Marcel</h1>
      <input
        type="text"
        className="form-control mt-3 mb-3"
        placeholder="Añadir nueva tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      />
      <button className="btn btn-primary mb-3" onClick={addTodo}>
        Añadir Tarea
      </button>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {todo}
            <button className="btn btn-danger" onClick={() => removeTodo(index)}>
              <i class="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-3">Total Todos: {todos.length}</p>
      
		</div>
	);
};

export default Todo;