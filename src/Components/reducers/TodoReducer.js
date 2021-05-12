import { ADD_TO_DO } from "../constantes/ActionTypes";
import { DELETE_TO_DO } from "../constantes/ActionTypes";
import { COMPLETE_TO_DO } from "../constantes/ActionTypes";
import { EDIT_TODO } from "../constantes/ActionTypes";
import { EDITABLE } from "../constantes/ActionTypes";

const initialState = {
  todos: [
    { id: 1, name: "Item 1", isComplete: false, editable: false },
    { id: 2, name: "Item 2", isComplete: false, editable: false },
    { id: 3, name: "Item 3", isComplete: false, editable: false }
  ]
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TO_DO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };
    case COMPLETE_TO_DO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        )
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.index
            ? {
                ...todo,
                name: action.payload.selected,
                editable: !todo.editable
              }
            : todo
        )
      };
    case EDITABLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, editable: !todo.editable }
            : todo
        )
      };
    default:
      return state;
  }
};

export default TodoReducer;