import axios from 'axios';
import User from '../models/User';

// link da API
export const api = axios.create({
	baseURL: 'https://blog-back-fawn.vercel.app'
});

// url = é o baseURL + /usuarios/cadastrar
// dados = enviando os dados necessários para cadastrar
// resposta = retorno da API
// setDado = função que filtra a resposta e pega o retorno da API (id, nome, usuario, senha, foto)
export const cadastroUsuario = async (url: string, dados: { nome: string, usuario: string, senha: string }, setDado: React.Dispatch<React.SetStateAction<User>>) => {
	const resposta = await api.post(url, dados);
	setDado(resposta.data);
}

// url = é o baseURL + /auth/logar
// dados = dados necessários para logar
// resposta = retorno da API
// setDado = função que filtra a resposta e pega o token
export const login = async (url: string, dados: { usuario: string, senha: string }, setDado: React.Dispatch<string>) => {
	const resposta = await api.post(url, dados);
	setDado(resposta.data.token);
}

// url = é o baseURL + /postagens ou /tema
// header = enviando o token para a API poder identificar o usuário
// resposta = retorno da API
// setDado = função que filtra a resposta e pega o retorno da api (postagem: id, titulo, texto, tema || tema: id, descricao)
export const busca = async (url: string, setDado: any, header: any) => {
	const resposta = await api.get(url, header);
	setDado(resposta.data);
}

export const buscaId = async (url: string, setDado: any, header: any) => {
	const resposta = await api.get(url, header);
	setDado(resposta.data);
}

export const post = async (url: string, dados: any, setDado: any, header: any) => {
	const resposta = await api.post(url, dados, header);
	setDado(resposta.data);
}

export const put = async (url: string, dados: any, setDado: any, header: any) => {
	const resposta = await api.put(url, dados, header);
	setDado(resposta.data);
}

export const deleteId = async (url: string, header: any) => {
	const resposta = await api.delete(url, header);
}