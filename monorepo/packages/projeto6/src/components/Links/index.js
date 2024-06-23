import { Link, useLocation } from "react-router-dom";

function Links() {
    const paginaAtual = useLocation();
    const caminhoDaPagina = paginaAtual.pathname;
    console.log(paginaAtual);
    return (
        <>
            {caminhoDaPagina !== "/" && <Link to="/">Home</Link>}
            {caminhoDaPagina !== "/sobre" && <Link to="/sobre">Sobre</Link>}
            {caminhoDaPagina !== "/contato" && <Link to="/contato">Contato</Link>}
        </>
    );
}

export default Links;