import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../../services/api'

const IMG_URL = "https://image.tmdb.org/t/p/original"

function Filme(){
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "a9e8acbcdd5457054bb67ef3b9b778ea",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("FILME NÃO ENCONTRADO")
            })
        }

        loadFilme();

        return() => {
            console.log("componente foi desmontado")
        }
    }, []);


    if(loading){
        return(
            <div className="loading-detalhes">
                <h1>Carregando detalhes do filmne...</h1>
            </div>
        );
    }

    return(
        <div className="loading-detalhes">
            <h1>{filme.title}</h1>
            <img src={`${IMG_URL}${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average.toFixed(2)} / 10</strong>
        </div>
    );
}

export default Filme;