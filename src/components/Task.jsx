import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Task = ({ Task, onDelete, reminder }) => {
  return (
    <div
      className={`task ${Task.reminder ? `reminder` : ""}`}
      onDoubleClick={(e) => reminder(Task.id)}
    >
      <h3>
        {Task.text} 
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={(e) => {
            onDelete(Task.id);
          }}
        />
      </h3>
      <p>{Task.day}</p>
    </div>
  );
};

export default Task;
