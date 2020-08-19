import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Choose from './components/login-choose/login-choose';

function App() {
  return (
    <div className="App">
      <Choose></Choose>
    </div>
  );
}

export default App;
