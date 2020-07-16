import React from "react"; 

const Todo = props => {
  console.log('Todo List', props.todoArray)
  return (
    <div>
      {props.todoArray.map(todo => (
        <h2>Todo Item: {todo.item}</h2>
      ))}
    </div>
  )
}

export default Todo; 