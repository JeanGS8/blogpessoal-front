import React from 'react';
import { Grid } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/home/Home';
import { Navbar } from './componentes/estaticos/navbar/Navbar';
import { Footer } from './componentes/estaticos/footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
