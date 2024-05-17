import React, { useState } from 'react';
import TaskList from './TaskList/taskList';
import AddTaskForm from './AddTaskForm/addTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { text: text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>Lista de Tareas</h2>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
