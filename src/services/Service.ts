import axios from 'axios';

// link da API
export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
});

// url = é o baseURL + /usuarios/cadastrar
// dados = dados necessários para cadastrar
// setDado = tokin
export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

// url = é o baseURL + /usuarios/logar
// dados = dados necessários para logar
// setDado = tokin
export const login = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}