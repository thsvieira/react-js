import Links from "../Links";

function Header() {
    return (
        <header>
            <h2>Projeto de Rotas React</h2>
            <div className='menu'>
                <Links/>
            </div>
        </header>
    );
}

export default Header;