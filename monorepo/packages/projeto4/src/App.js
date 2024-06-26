import React, { useState } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Teste 1',
    'Teste 2'
  ]);

  const [input, setInput] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, input])
  }

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>ADICIONAR TAREFA</button>
    </div>
  );
}

export default App;
