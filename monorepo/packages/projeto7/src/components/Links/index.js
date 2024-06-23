import { Link } from 'react-router-dom'
import '../../styles.scss'

function Links(){
    return(
        <div className="menu">
            <Link className="logo" to="/">Prime Flix</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </div>
    );
}

export default Links;