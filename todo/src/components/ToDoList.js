import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/reducers";

export function Form() {
  const [newTask, setNewTask] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);
  //   console.log(newTask, "this is new task value");

  const handleChanges = (e) => {
    e.preventDefault();
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTask });
  };

  const markCompleted = (e) => {
    // console.log('marked complete id')
    dispatch({ type: "TOGGLE_TODO", payload: e });
  };

  const clearCompleted = (e) => {
    // console.log('test')
    e.preventDefault();
    dispatch({ type: "CLEAR_TODO" })

  }

  return (
    <div>
      <form>
        {state.map((newTask) => (
          <h3 className={(newTask.completed ? 'completedTask' : '')}
            key={newTask.id} onClick={() => markCompleted(newTask.id)}>
            {newTask.item}
          </h3>
        ))}
        <label>
          <input
            id="taskInput"
            name="todo"
            type="text"
            value={newTask}
            onChange={handleChanges}
          />
        </label>
        <button onClick={handleSubmit}>Add Task</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
}
