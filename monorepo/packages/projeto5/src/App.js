import React, { useState, useEffect } from 'react';
import './styles.scss'

const URL = 'https://sujeitoprogramador.com/rn-api/?api=posts'

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      fetch(URL)
        .then((result) => result.json())
        .then((json) => {
          setNutri(json)
        })
    }
    loadApi();
  }, [])

  return (
    <div className='container'>
      <header>
        <strong>React Nutri App</strong>
      </header>

        {nutri.map((item) => {
          return(
            <article key={item.id} className='post'>
              <strong className='titulo'>{item.titulo}</strong>

              <img src={item.capa} alt={item.titulo}/>
              <p className='subtitulo'>{item.subtitulo}</p>
              <a href='./' className='botao'>Leia mais...</a>
            </article>
          );
        })}
    </div>
  );
}

export default App;