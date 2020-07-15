import React from "react"; 


const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Learn Redux',
      completed: false,
      id: 3892987589
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: "",
        completed: false,
        id: Date.now()
      }
      return {
        ...state,
        todos: [...state.todo, newTodo]
      };
  }
  return state; 
}; 

export { initialState, reducer}; 