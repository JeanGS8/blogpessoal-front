import React, { ChangeEvent, useState, useEffect } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { useDispatch} from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login(){

  /*
  1) useNavigate = é o hook capaz de alterar a página para o usuário.
  */
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [token, setToken] = useState('');

   /*
  1) se o usuário conseguir logar (ter um token) ele vai ser redirecionado para a Home, o Hook só vai acontecer se o token for modificado.
  */
  useEffect(() => {
    if(token != ''){
      dispatch(addToken(token))
      navigate('/home');
    }
  }, [token])

  /*
  1) useState<UserLogin> = é o hook capaz de atualizar a página. Ele está falando que a variável userLogin é do tipo da interface UserLogin (que está em models)
  2) userLogin = é a variável que contem os valores que o usuário mandar (usuario, senha) + os valores que a API mandar (id, token), por padrão ela está zerada.
  3) setUserLogin = é a função capaz de alterar os valores de userLogin.
  */
  const [userLogin, setUserLogin] = useState<UserLogin>(
      {
        id: 0,
        usuario: '',
        senha: '',
        token: '',
      }
    );

  /*
  1) function updateModel = função feita para pegar o valor que o usuário mandar (que são os dados de login) e enviar para userLogin
  2) setUserLogin = função do hook state para alterar os dados da variável userLogin
  3) ...userLogin = pega tudo que estiver no userLogin (id, usuario, senha, token), para que eu possa configurar quais campos ele pode me passar do userLogin
  4) [e.target.name] = capturando a propriedade pelo nome // e.target.value = colocamos na TAG o que ele pode me passar (por exemplo userLogin.usuario) + recebemos o valor que o usuário passar
  */
  function updateModel(e: ChangeEvent<HTMLInputElement>){
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  /*
  1) function onSubmit = é uma função que vai verificar se os dados estão corretos, ela só vai ser executada quando o usuário clicar no button submit na form. (o nome da função não faz diferença).
  2) e.preventDefault() = não vai deixar o evento atualizar a pagina.
  3) try = vai tentar ativar a função login (que está no service), se tudo ocorrer bem ela vai retornar um alert com uma mensagem positiva.
  4) catch = se a tentativa não ocorrer bem, ela vai retornar uma mensagem negativa.
  5) login(`/auth/logar`, userLogin, setToken) = ativa a função login (que está no service) enviando o end-point de post login da API, os dados de login que o usuário passou, uma função do localStorage que vai pegar a resposta da API (que vai ser um token). (no service está mais explicativo)
  */
  async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault(); // não vai permitir atualizar a tela

    try{
      await login(`/auth/logar`, userLogin, setToken) // setTokin está salvando o tokin no localstorage
      toast.success('Usuário logado com sucesso', {
        position: 'top-right', // position? topo direita
        autoClose: 2000, // Fechar automaticamente? após 2 segundos
        hideProgressBar: false, // não mostrar o progresso? mostrar
        closeOnClick: true, // fechar após o click? sim
        pauseOnHover: false, // pausar quando o usuário mover o mouse? não
        draggable: false, // permitir mover a notificação do local? não
        theme: 'light', // tema? light
        progress: undefined // 
      });
    }catch(error){
      toast.error('Dados do usuário inconsistentes. Erro ao logar', {
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
  }

  return(
    <>
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item alignItems='center' xs={6}>
          <Box paddingX={20}>
            <form onSubmit={onSubmit}>
              <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='textos1'>
                Entrar
              </Typography>
              <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth/>
              <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth/>
              <Box marginTop={2} textAlign='center'>
                <Button type='submit' variant='contained' color='primary'>
                  Logar
                </Button>
              </Box>
              <Box display='flex' justifyContent='center' marginTop={2}>
                <Box marginRight={1}>
                  <Typography variant='subtitle1' gutterBottom align='center'> Não tem uma conta? </Typography>
                </Box>
                <Link to='/cadastrousuario'>
                  <Typography variant='subtitle1' gutterBottom align='center' className='textos1'> Cadastre-se </Typography>
                </Link>
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid item xs={6} className='imagem'>

        </Grid>
      </Grid>
    </>
  );
}

export { Login };