import { useState, useEffect } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';

const IMG_URL = "https://image.tmdb.org/t/p/original"

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "a9e8acbcdd5457054bb67ef3b9b778ea",
                    language: "pt-BR",
                    page: 1
                }
            })
            setFilmes(response.data.results.slice(0, 10));

        }

        loadFilmes();
        setLoading(false);

    }, [])

    if(loading){
        return(
            <div className="loading">
                <strong>Carregando filmes...</strong>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`${IMG_URL}${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;