import React, { useState } from "react";
import { addToDo } from "./Components/actions/TodoAction";
import { useDispatch } from "react-redux";

const AddTODO = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const dispatch = useDispatch();
  const Add = () => {
    dispatch(
      addToDo({
        id: Math.random(),
        name: name,
        isComplete: false
      })
    );
    setName("");
  };

  return (
    <div>
      <div className="input">
        <input
          type="name"
          placeholder="new todo ..."
          value={name}
          onChange={handleChange}
        />
        <button onClick={Add}>Add</button>
      </div>
    </div>
  );
};

export default AddTODO;