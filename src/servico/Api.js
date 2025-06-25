import axios from "axios";
import cookie from 'js-cookie';

async function setTokenAxios() {
    const token = cookie.get('token'); console.log(token)
    axios.defaults.headers.common['token'] = token;
}

export default {setTokenAxios};