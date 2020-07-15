import React, { useState, useReducer } from "react";

import { reducer, initialState } from "../reducers/reducer";

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState); 
  console.log(state); 

  return (
    <div>
      {/* <h1>{state.item}</h1> */}
      {state.todos.map(todo => (
        <h2>Todo Item: {todo.item}</h2>
      ))}
    </div>
  )
}

export default Todo; 