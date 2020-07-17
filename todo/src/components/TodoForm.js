import React, { useState, useReducer } from "react"; 
import { reducer, initialState } from "../reducers/reducer"; 
import Todo from './Todo';

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
    e.preventDefault();
    dispatch({ type: "TOGGLE_TODO", payload: item })
  }

  return (
    <div>
      <h3>Add Todo Form</h3>
      <form>
        <input
          className="todo-input"
          type="text"
          name="newTodo"
          value={newTodo}
          onChange={handleChanges}
        /> 
        <button onClick={(e) => {handleSubmit(e)}}>
          Submit
        </button>  
        <Todo 
          todoArray={state.todos} 
          toggleItem={toggleItem}
        />
      </form>
    </div>
  )
};

export default TodoForm; 
