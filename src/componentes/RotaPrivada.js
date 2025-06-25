import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import cookie from "js-cookie";


export default function RotaPrivada({children}) {
    const navegacao = useNavigate();
    const temtoken = cookie.get('token') != null;

    useEffect(() => {
        if (!temtoken) {
            navegacao('/login');
        }
    }, []);

    return temtoken ? children : null;    
}