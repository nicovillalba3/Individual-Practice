import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTaskText.trim()) {
      alert("Invalido, debe ingresar una tarea.")

      return;
    }

    onAddTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTaskText} onChange={handleChange} placeholder="Nueva tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddTaskForm;
