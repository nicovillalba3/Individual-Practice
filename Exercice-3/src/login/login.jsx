import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    
    if (inputValue.toLowerCase().includes('o')) {
      alert('Por favor, ¡Nombres de usuario sin la letra o!');
    } 

    setUsername(inputValue);
    
  };

  const handleSubmit = () => {
   
    if (username.trim() === '' || username.toLowerCase().includes('o')) {
      alert('Usuario inválido para registrarse');
    } else {
      alert('¡Usuario registrado correctamente!');
      setUsername('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingresa tu nombre de usuario"
        value={username}
        onChange={handleChange}
        style={{ width: '180px' }}
      />
      <button onClick={handleSubmit}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
};

export default Login;