import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import cookie from 'js-cookie';

export default function FormLogin() {
    const navegacao = useNavigate();

    //Declarar um useState para cada campo da tabela
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const login = async () => {
        //montar o json do body com todos os campos que precisam ser enviados
        let body = {
            "email": email,
            "senha": senha
        };

        try {
            const resposta = await axios.put(`https://biblioteca2025-back-end-render.onrender.com/funcionario/login`, body);

            if (resposta.status === 200) {
                const token = resposta.data;
                cookie.set('token', token);
                navegacao('/');
            }
        } catch (error) {
            alert(error.response.data);
        }
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label className="form-label">
                        E-mail
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Senha
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        value={senha}
                        onChange={(evento) => setSenha(evento.target.value)}
                    />
                </div>

                <button type="button" className="btn btn-primary"
                    onClick={() => login()}>
                    Entrar
                </button>
            </form>
        </>
    );
};