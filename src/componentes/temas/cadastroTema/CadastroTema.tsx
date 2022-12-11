import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import './CadastroTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function CadastroTema() {

	let navigate = useNavigate();

	const { id } = useParams<{ id: string }>();
	const token = useSelector<TokenState, TokenState['tokens']>(
		(state) => state.tokens
	)

	const [tema, setTema] = useState<Tema>({
		id: 0,
		descricao: '',
	})

	useEffect(() => {
		if (token == '') {
			toast.error('Você precisa estar logado', {
				position: 'top-right', // position? topo direita
				autoClose: 2000, // Fechar automaticamente? após 2 segundos
				hideProgressBar: false, // não mostrar o progresso? mostrar
				closeOnClick: true, // fechar após o click? sim
				pauseOnHover: false, // pausar quando o usuário mover o mouse? não
				draggable: false, // permitir mover a notificação do local? não
				theme: 'light', // tema? light
				progress: undefined // 
			});
			navigate('/login')
		}
	}, [token])

	useEffect(() => {
		if (id != undefined) {
			findById(id)
		}
	}, [id])

	async function findById(id: string) {
		buscaId(`/tema/${id}`, setTema, {
			headers: {
				'Authorization': token
			}
		})
	}

	function updatedTema(e: ChangeEvent<HTMLInputElement>) {
		setTema({
			...tema,
			[e.target.name]: e.target.value,
		})
	}

	async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault()
		console.log("tema " + JSON.stringify(tema))

		if(id != undefined){
			console.log(tema)
			put(`/tema`, tema, setTema, {headers: {'Authorization': token}});
			toast.success('Tema atualizado com sucesso', {
				position: 'top-right', // position? topo direita
				autoClose: 2000, // Fechar automaticamente? após 2 segundos
				hideProgressBar: false, // não mostrar o progresso? mostrar
				closeOnClick: true, // fechar após o click? sim
				pauseOnHover: false, // pausar quando o usuário mover o mouse? não
				draggable: false, // permitir mover a notificação do local? não
				theme: 'light', // tema? light
				progress: undefined // 
			});
		}
		else{
			post(`/tema`, tema, setTema, {headers: {'Authorization': token}});
			toast.success('Tema cadastrado com sucesso', {
        position: 'top-right', // position? topo direita
        autoClose: 2000, // Fechar automaticamente? após 2 segundos
        hideProgressBar: false, // não mostrar o progresso? mostrar
        closeOnClick: true, // fechar após o click? sim
        pauseOnHover: false, // pausar quando o usuário mover o mouse? não
        draggable: false, // permitir mover a notificação do local? não
        theme: 'light', // tema? light
        progress: undefined // 
      });
		}
		back()
	}

	function back(){
		navigate('/temas');
	}

	return (
		<Container maxWidth="sm" className="topo">
			<form onSubmit={onSubmit}>
				<Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
				<TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
				<Button type="submit" variant="contained" color="primary">
					Finalizar
				</Button>
			</form>
		</Container>
	)
}

export default CadastroTema;