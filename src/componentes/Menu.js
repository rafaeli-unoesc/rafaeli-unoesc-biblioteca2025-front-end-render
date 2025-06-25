import cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Menu() {
    const navegacao = useNavigate();

    const [temtoken, setTemToken] = useState(false);

    const desconectar = () => {
        cookie.remove('token');
        navegacao('/');
    }

    useEffect(() => {
        let tt = cookie.get('token') != null;
        setTemToken(tt);
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            {temtoken && (
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => desconectar()} href=''>
                                        Desconectar
                                    </a>
                                </li>
                            )}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Listagens
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/listacategoria">
                                            Categorias
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/listaautor">
                                            Autores
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </>
    );
};