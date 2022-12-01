import React from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { Navbar } from './componentes/estaticos/navbar/Navbar';
import { Footer } from './componentes/estaticos/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
