import React from 'react';
import { Home } from './pages/home/Home';
import { Navbar } from './componentes/estaticos/navbar/Navbar';
import { Footer } from './componentes/estaticos/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { CadastroUsuario } from './pages/cadastroUsuario/CadastroUsuario';
import { ListaTema } from './componentes/temas/listatema/ListaTema';
import { ListaPostagem } from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import './App.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Router>
        <Navbar />
          <div style={{minHeight: '100vh'}}>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/cadastrousuario' element={<CadastroUsuario />} />
              <Route path='/temas' element={<ListaTema />} />
              <Route path='/posts' element={<ListaPostagem />} />
              <Route path="/formularioPostagem" element={<CadastroPost />} />
              <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
