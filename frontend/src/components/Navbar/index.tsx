import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Avaliação de Filmes</h1>
                    <a href="https://github.com/Jordanrafael92">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/jordanrafael92</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
