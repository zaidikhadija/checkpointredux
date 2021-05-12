import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "./Components/actions/TodoAction";
import { completeToDo } from "./Components/actions/TodoAction";
import { editableTodo } from "./Components/actions/TodoAction";
import { editTodo } from "./Components/actions/TodoAction";
import { useState } from "react";
import "./App.css";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(todo.name);

  const ediatbl = () => {
    dispatch(editableTodo(todo.id));
  };
  const editt = () => {
    dispatch(editTodo({ index: todo.id, selected: input }));
    setInput("");
  };

  return (
    <div>
      {todo.editable ? (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={editt}>save</button>
          <button onClick={ediatbl}>cancel</button>
          <button onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>
        </>
      ) : (
        <>
          <p className={todo.isComplete ? "Done" : undefined}>{todo.name}</p>
          <button onClick={() => dispatch(completeToDo(todo.id))}>
            {todo.isComplete ? "Undo" : "isComplete"}
          </button>
          <button onClick={ediatbl}>edit</button>
          <button onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>
        </>
      )}
    </div>
  );
};

/*return (
    <div>
      <p className={todo.isComplete ? "Done" : undefined}>{todo.name}</p>
      <button onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>
      <button onClick={() => dispatch(completeToDo(todo.id))}>
        {todo.isComplete ? "Undo" : "isComplete"}
      </button>
      <button>Edit</button>
    </div>
  );
};*/
export default TodoItem;