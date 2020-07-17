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
          className={`todo${todo.completed ? " completed" : ""}`}> 
          <ul className="todo-item">{todo.item}</ul>
        </div>
        )})}
        <div>
          <button 
            className="clear-button"
            onClick={() => props.clearCompleted(props.todoArray.completed) 
          }>
            Clear Completed
          </button>
        </div>
    </div>
  )
}

export default Todo; 