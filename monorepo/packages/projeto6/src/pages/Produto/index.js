import { useParams } from 'react-router-dom';

function Produto() {
    const { id } = useParams();

    return (
        <div className='container'>
            <h1>Produto</h1>
            <span>Você acessou a página do produto {id}</span>
        </div>
    );
}

export default Produto;