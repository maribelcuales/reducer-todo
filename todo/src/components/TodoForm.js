import React, { useState, useReducer } from "react"; 
import { reducer, initialState } from "../reducers/reducer"; 
import Todo from './Todo';
import './styles.css'; 

function TodoForm() {
  const [state, dispatch] = useReducer(reducer, initialState); 
  console.log(state); 

  const [newTodo, setNewTodo] = useState(""); 

  const handleChanges = e => {
    e.preventDefault(); 
    setNewTodo(e.target.value); 
  }

  const handleSubmit = e => {
    e.preventDefault(); 
    dispatch({ type: "ADD_TODO", payload: newTodo})
  }

  const toggleItem = item => {
    dispatch({ type: "TOGGLE_TODO", payload: item })
  }

  const clearCompleted = e => {
    dispatch({ type: "CLEAR_COMPLETED" })
  }

  return (
    <div className="todo-form">
      <form>
        <input
          className="todo-input"
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        /> 
        <button onClick={(e) => {handleSubmit(e)}}>
          Add Todo
        </button>
      </form>
      <div className="todo-container">
        <Todo 
          todoArray={state.todos} 
          toggleItem={toggleItem}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  )
};

export default TodoForm; 
