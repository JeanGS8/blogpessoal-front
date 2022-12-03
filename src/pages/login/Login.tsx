import React, { ChangeEvent, useState, useEffect } from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';

function Login(){

  let navigate = useNavigate();

  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UserLogin>(
      {
        id: 0,
        usuario: '',
        senha: '',
        token: '',
      } // dados padrão do UserLogin
    );

    function updateModel(e: ChangeEvent<HTMLInputElement>){ // função que vai pegar os dados que o usuário passar no input
      setUserLogin({
        ...userLogin, // pega tudo que estiver no userLogin
        [e.target.name]: e.target.value // [e.target.name] = capturando a propriedade // e.target.value = capturando o valor da propriedade
      })
    }

    useEffect(() => {
      if(token != ''){
        navigate('/home');
      }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
      e.preventDefault(); // não vai permitir atualizar a tela

      try{
        await login(`/usuarios/logar`, userLogin, setToken) // setTokin está salvando o tokin no localstorage

        alert('usuario logado com sucesso!');
      }catch(error){
        alert('Dados do usuário inconsistentes. Erro ao logar!');
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