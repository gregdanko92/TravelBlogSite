import './App.css';
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Routes from './config/Routes'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      
    </div>
  );
}

export default App;
