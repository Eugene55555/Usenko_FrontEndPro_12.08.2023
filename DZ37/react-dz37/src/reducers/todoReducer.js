const initialState = {
    todos: [],
    todoInput: '',
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { text: action.payload, completed: false }],
          todoInput: '',
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload),
        };
      case 'UPDATE_TODO_INPUT':
        return {
          ...state,
          todoInput: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;