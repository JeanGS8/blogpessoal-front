import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './ListaTema.css';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaTema() {

  /*
  1) useNavigate = é o hook capaz de alterar a página para o usuário.
  */
  let navigate = useNavigate();

  /*
  1) useState<Tema[]> = é o hook capaz de atualizar a página. Ele está falando que a variável temas é do tipo da interface Tema (que está em models)
  2) temas = é a variável que contem os temas qua a API mandar (id, descrição), por padrão ela está zerada.
  3) setTemas = é a função capaz de alterar os valores da variável temas.

  * É UM VETOR PORQUE PODEM TER VÁRIOS TEMAS *
  */
  const [temas, setTemas] = useState<Tema[]>([])

  /*
  1) useLocalStorage = é o hook capaz de armazenar um valor na página, este hook vai armazenar o token.
  2) token = é a variável que vai receber o token.
  3) setToken = é a função capaz de atualizar o valor da variável token.
  */
  const [token, setToken] = useLocalStorage('token');

  /*
  1) se o usuário não possuir token ele vai ser redirecionado para a tela de login.
  */
  useEffect(() => {
    if(token == ''){
      alert('você precisa estar logado!');
      navigate('/login');
    }
  }, [token])

  /*
  1) getTema = função que vai pegar todos os temas da minha API.
  2) seTemas = função do hook state para alterar os dados da variável temas.
  5) busca(`/tema`, setTemas , { headers: {'authorization': token}}) = ativa a função busca (que está no service) enviando o end-point de get tema da API, uma função que vai pegar todos os dados que a API mandar e enviar para a variável temas, passando no cabeçalho da requisição os dados necessários para poder acessar a requisição da API. (no service está mais explicativo)
  */
  async function getTema(){
    await busca(`/tema`, setTemas , {
      headers: {
        'authorization': token
      }
    });
  }

  /*
  1) Sempre que a quantidade de temas for aumentada a página vai ser recarregada e receberá o tema.
  */
  useEffect(() => {
    getTema();
  }, [temas.length])
  
  return (
    <>
    {
      temas.map(tema => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
    }
    </>
  );
}

export { ListaTema };