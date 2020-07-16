import React, { useState, useReducer } from "react"; 
import { reducer, initialState } from "../reducers/reducer"; 
import Todo from './Todo';

function TodoForm() {
  const [state, dispatch] = useReducer(reducer, initialState); 
  console.log(state); 

  const [newTodo, setNewTodo] = useState(""); 

  const handleChanges = e => {
    setNewTodo(e.target.value); 
  }

  return (
    <div>
      <h3>Add Todo Form</h3>
      <form>
        <input
          className="todo-input"
          type="text"
          name="todoInput"
          value={newTodo}
          onChange={handleChanges}
        /> 
        <button onClick={() => dispatch({ type: "ADD_TODO" })} >
          Submit
        </button>  
        <Todo todoArray={state.todos}/>
      </form>
    </div>
  )
};

export default TodoForm; 
