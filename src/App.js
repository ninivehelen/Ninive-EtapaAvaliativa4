import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './home';
import Routes from './routers';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <Header/>
    <Routes/>
    
  </BrowserRouter>
 
  );
}

export default App;

