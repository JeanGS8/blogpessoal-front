import React from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { Navbar } from './componentes/estaticos/navbar/Navbar';
import { Footer } from './componentes/estaticos/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { CadastroUsuario } from './pages/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cadastrousuario' element={<CadastroUsuario/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
