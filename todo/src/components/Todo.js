import React from "react"; 

const Todo = props => {
  return (
    <div>
      {props.todoArray.map(todo => (
        <h2>Todo Item: {todo.item}</h2>
      ))}
    </div>
  )
}

export default Todo; 