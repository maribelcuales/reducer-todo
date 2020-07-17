
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
      id: 3892987590
    }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const addTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      }
      return {
        ...state,
        todos: [...state.todos, addTodo]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(item => {
          if (action.payload === item.id ) {
            return {
              ...item,
              completed: !item.completed
            }
          } 
          return {
            ...item
          }
        })
      }; 
    default: 
      return state; 
  }
}; 

export { initialState, reducer}; 