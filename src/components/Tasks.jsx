import React from "react";
import Task from "./Task";

const Tasks = ({ Tasks, onDelete, reminder, editStatus }) => {
  return Tasks.map((task) => {
    return (
      <Task
        key={task.id}
        Task={task}
        onDelete={onDelete}
        editStatus={editStatus}
        reminder={reminder}
      />
    );
  });
};

export default Tasks;
