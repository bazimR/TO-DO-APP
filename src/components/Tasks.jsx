import React from "react";
import Task from "./Task";

const Tasks = ({ Tasks, onDelete,reminder }) => {
  return Tasks.map((task) => {
    return <Task key={task.id} Task={task} onDelete={onDelete} reminder={reminder}/>;
  });
};

export default Tasks;
