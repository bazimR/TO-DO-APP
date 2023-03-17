import React, { useState } from "react";
import Addtask from "./components/Addtask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([]);
  ///add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id,...task}
    setTasks([newTask,...tasks])
  }
  ///delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }
  ///Toggle reminder
  const reminder = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.reminder = !task.reminder
      }
      return { ...task, task }
    }))
  }



  return (
    <div className="container">
      <Header />
      <Addtask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks reminder={reminder} onDelete={deleteTask} Tasks={tasks} /> : "NO TO-DO'S LEFT!"}
    </div>
  );
}

export default App;
