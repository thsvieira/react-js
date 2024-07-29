import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { toast } from "react-toastify";

const IMG_URL = "https://image.tmdb.org/t/p/original"

function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();

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
                navigate('/', {replace: true});
                return
            })
        }
        loadFilme();
    }, [navigate, id]);


    if(loading){
        return(
            <div className="loading-detalhes">
                <h1>Carregando detalhes do filme...</h1>
            </div>
        );
    }

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        let filmeJaSalvo = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id )

        if(filmeJaSalvo){
            toast.warn("ESSE FILME JÁ ESTÁ NA SUA LISTA!", {
                className: 'custom-toast-body'
            });
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("FILME SALVO COM SUCESSO!");
    }

    return(
        <div className="detalhes-filme">
            <h1>{filme.title}</h1>
            <img src={`${IMG_URL}${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average.toFixed(2)} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} trailer`} target="blank" rel="external">
                        Trailer
                    </a>
                </button>
            </div>

        </div>
    );
}

export default Filme;