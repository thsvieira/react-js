import Links from "../../components/Links";

function Erro(){
    return(
        <div className='container'>
            <h2>Ops! Parece que essa página não existe no nosso sistema</h2>
            <p>Encontramos essas páginas disponíveis: </p>
            <div className='links-erro'>
                <Links/>
            </div>
        </div>
    );
}

export default Erro;