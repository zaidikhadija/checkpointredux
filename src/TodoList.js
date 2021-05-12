import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [all, setAll] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [active, setActive] = useState(false);

  const handleCompleted = () => {
    setCompleted(!completed);
    setActive(false);
    setAll(false);
  };
  const handleActive = () => {
    setActive(!active);
    setCompleted(false);
    setAll(false);
  };
  const handleAll = () => {
    setAll(!all);
    setActive(false);
    setCompleted(false);
  };
  return (
    <div>
      {" "}
      <div class="p-2 mx-4 border-black-25 border-bottom"></div>
      <div class="row m-1 p-3 px-5 justify-content-end">
        <div class="col-auto d-flex align-items-center">
          <button onClick={handleCompleted}>show completed</button>{" "}
          <button onClick={handleActive}>show active</button>{" "}
          <button onClick={handleAll}>show all</button>{" "}
        </div>{" "}
        {completed
          ? todos
              .filter((elem) => elem.isComplete === true)
              .map((el) => <TodoItem todo={el} />)
          : active
          ? todos
              .filter((elem) => elem.isComplete === false)
              .map((el) => <TodoItem todo={el} />)
          : all
          ? todos.map((el) => <TodoItem todo={el} />)
          : todos.map((el) => <TodoItem todo={el} />)}
      </div>
    </div>
  );
};

export default TodoList;
