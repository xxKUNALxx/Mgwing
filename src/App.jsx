import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Layout/Navbar';
import Allroutes from './Allroutes';
import GlobalStyle from './components/UI/GlobalStyle';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Allroutes />
      <Footer/>
    </Router>
  );
}

export default App;
