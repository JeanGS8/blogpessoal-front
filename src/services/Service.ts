import axios from 'axios';

// link da API
export const api = axios.create({
    baseURL: 'https://blogpessoal-8o6b.onrender.com'
});

// url = é o baseURL + /usuarios/cadastrar
// dados = enviando os dados necessários para cadastrar
// resposta = retorno da API
// setDado = função que filtra a resposta e pega o retorno da API (id, nome, usuario, senha, foto)
export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

// url = é o baseURL + /auth/logar
// dados = dados necessários para logar
// resposta = retorno da API
// setDado = função que filtra a resposta e pega o token
export const login = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

// url = é o baseURL + /postagens ou /tema
// header = enviando o token para a API poder identificar o usuário
// resposta = retorno da API
// setDado = função que filtra a resposta e pega o retorno da api (postagem: id, titulo, texto, tema || tema: id, descricao)
export const busca = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}