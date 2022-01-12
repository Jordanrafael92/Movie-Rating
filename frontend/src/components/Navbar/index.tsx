import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';

function Navbar() {
    return (
        <header>
            <nav>
                <div>
                    <h1>Movie Rating</h1>
                    <a href="https://github.com/Jordanrafael92">
                        <div>
                            <GithubIcon />
                            <p>/jordanrafael92</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
