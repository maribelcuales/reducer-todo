import React from "react";
import './styles.css'

const Todo = props => {
  console.log(props.toggleItem); 
  return (
    <div className="todo-list">
      {props.todoArray.map(todo => {
        return (
        <div 
          key={todo.id}
          onClick={() => props.toggleItem(todo.id)} 
          className={`todo${todo.completed ? "completed" : ""}`}> 
          <p>{todo.item}</p>
        </div>
        )})}
    </div>
  )
}

export default Todo; 