import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import './favoritos.css'

function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || []);
    }, [])

    function excluirFilme(filmeId) {
        let filtroFilmes = filmes.filter((filme) =>  {
            return (filme.id !== filmeId);
        });

        setFilmes(filtroFilmes);
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes));
        toast.success("FILME REMOVIDO DA LISTA!")
    }

    return(
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo na lista!</span>}

            <ul>
                {filmes.map(filme => {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir da Lista</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Favoritos;