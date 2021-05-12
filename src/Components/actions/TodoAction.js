import {
    ADD_TO_DO,
    DELETE_TO_DO,
    COMPLETE_TO_DO,
    EDIT_TODO,
    EDITABLE
  } from "../constantes/ActionTypes";
  
  export const addToDo = (newTodo) => {
    return { type: ADD_TO_DO, payload: newTodo };
  };
  
  export const deleteToDo = (idTodo) => {
    return { type: DELETE_TO_DO, payload: idTodo };
  };
  
  export const completeToDo = (idTodo) => {
    return { type: COMPLETE_TO_DO, payload: idTodo };
  };
  export const editTodo = (payload) => {
    return { type: EDIT_TODO, payload };
  };
  export const editableTodo = (idTodo) => {
    return {
      type: EDITABLE,
      payload: idTodo
    };
  };