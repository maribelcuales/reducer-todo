import React, { useState, useReducer } from "react";

import { reducer, initialState } from "../reducers/reducer";
import TodoForm from './TodoForm'; 

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState); 
  console.log(state); 

  return (
    <div>
      {state.todos.map(todo => (
        <h2>Todo Item: {todo.item}</h2>
      ))}
      <TodoForm /> 
    </div>
  )
}

export default Todo; 