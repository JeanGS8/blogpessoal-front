import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {

  /*
  1) useNavigate = é o hook capaz de alterar a página para o usuário.
  */
  let navigate = useNavigate();

  /*
  1) useState<string> = é o hook capaz de atualizar a página. Ele está falando que a variável confirmarSenha é do tipo string.
  2) confirmarSenha = é uma variável que vai pegar a segunda senha que o usuário passar, por padrão ela está zerada.
  3) setConfirmarSenha = é a função capaz de alterar o valor da variável confirmarSenha.
  */
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  /*
  1) useState<User> = é o hook capaz de atualizar a página. Ele está falando que a variável user é do tipo da interface User (que está em models)
  2) user = é a variável que contem os valores que o usuário mandar (nome, usuario, senha) + os valores que a API mandar (id, foto), por padrão ela está zerada.
  3) setUser = é a função capaz de alterar os valores de user.
  */
  const [user, setUser] = useState<User>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
    }
  )

  /*
  1) useState<User> = é o hook capaz de atualizar a página. Ele está falando que a variável user é do tipo da interface User (que está em models)
  2) userResult = se o usuário conseguir se cadastrar, é a variável que contem os valores que a API mandar (id, nome, usuario, senha, foto), por padrão ela está zerada.
  3) setUserResult = é a função capaz de alterar os valores de userResult.

  * ELA SÓ VAI SER ALTERADA CASO O USUÁRIO CONSIGA SE CADASTRAR *
  */
  const [userResult, setUserResult] = useState<User>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
    }
  )

  /*
  1) se o usuário conseguir se cadastrar (ter um id) ele vai ser redirecionado para o login, o Hook só vai acontecer se o userResult for modificado.
  */
  useEffect(() => {
    if (userResult.id != 0) {
      navigate('/login')
    }
  }, [userResult])

  /*
  1) function confirmarSenhaHandle = função feita para pegar o valor que o usuário mandar que é a senha de confirmação e enviar para user
  2) setConfirmarSenha = função do hook state para alterar os dados da variável confirmarSenha
  3) e.target.value = colocamos na TAG o que ele pode me passar (que só pode ser 'confirmarSenha') + recebemos o valor que o usuário passar
  */
  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  /*
  1) function updateModel = função feita para pegar o valor que o usuário mandar (que são os dados de cadastro) e enviar para user
  2) setUser = função do hook state para alterar os dados da variável user
  3) ...user = pega tudo que estiver no user (id, nome, usuario, senha, foto), para que eu possa configurar quais campos ele pode me passar do user
  4) [e.target.name] = capturando a propriedade pelo nome // e.target.value = colocamos na TAG o que ele pode me passar (por exemplo user.usuario) + recebemos o valor que o usuário passar
  */
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }

  /*
  1) function onSubmit = é uma função que vai verificar se os dados estão corretos, ela só vai ser executada quando o usuário clicar no button submit na form. (o nome da função não faz diferença).
  2) e.preventDefault() = não vai deixar o evento atualizar a pagina.
  3) if (confirmarSenha == user.senha) = vai ver se a senha está correta, se tudo ocorrer bem ela vai retornar um alert com uma mensagem positiva.
  4) else = se a tentativa não ocorrer bem, ela vai retornar uma mensagem negativa.
  5) cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult) = ativa a função cadastroUsuario (que está no service) enviando o end-point de post cadastro da API, os dados de cadastro que o usuário passou, uma função do userResult que vai pegar a resposta da API (que vai ser as configurações de login do usuário). (no service está mais explicativo)
  */
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
      toast.success('Usuário cadastrada com sucesso', {
        position: 'top-right', // position? topo direita
        autoClose: 2000, // Fechar automaticamente? após 2 segundos
        hideProgressBar: false, // não mostrar o progresso? mostrar
        closeOnClick: true, // fechar após o click? sim
        pauseOnHover: false, // pausar quando o usuário mover o mouse? não
        draggable: false, // permitir mover a notificação do local? não
        theme: 'light', // tema? light
        progress: undefined // 
      });
    } else {
      toast.error('Dados inconsistentes. Favor verificar as informações de cadastro', {
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

  return (
    <>
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={6} className='imagem2'></Grid>
        <Grid item xs={6} alignItems='center'>
          <Box paddingX={10}>
            <form onSubmit={onSubmit}>
              <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='textos2'>
                Cadastrar
              </Typography>
              
              <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />

              <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" type='email' fullWidth />

              <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />

              <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="confirmarSenha" variant="outlined" name="confirmarSenha" margin="normal" type='password' fullWidth />

              <Box marginTop={2} textAlign='center'>
                <Link to='/login' className='text-decorator-none'>
                  <Button variant='contained' color='secondary' className='btnCancelar'>
                    Cancelar
                  </Button>
                </Link>

                <Button type='submit' variant='contained' color='primary'>
                  Cadastrar
                </Button>

              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export { CadastroUsuario };