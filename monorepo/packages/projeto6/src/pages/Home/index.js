import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Home() {
  const [numero, setNumero] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/produto/${numero}`);
  };

  return (
    <div className='container'>
      <h1>Página Home</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
          placeholder='Digite o número do produto'
        />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  );
}

export default Home;