import React from 'react';
import Login from './login/login'; // Asegúrate de tener la ruta correcta al archivo Login.js
import './App.css'

const App = () => {
  return (
    <div className="card">
      <h1>Ingresa tu nombre de Usuario:</h1>
      <Login/>
    </div>
  );
};

export default App;
