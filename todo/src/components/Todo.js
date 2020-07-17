import React from "react"; 

const Todo = props => {
  console.log(props.toggleItem); 
  return (
    <div className="todo-list">
      {props.todoArray.map(todo => (
        <div 
          key={todo.id}
          onClick={() => props.toggleItem(todo.id)} 
          className={`todo${todo.completed ? "completed" : ""}`
        }> 
          <h2>{todo.item}</h2>
        </div>
      ))}
    </div>
  )
}

export default Todo; 