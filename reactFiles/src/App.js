import React, { Component } from 'react';
import './css/App.css';


import { Profissional } from './components/Profissional';
import { NavBar } from './components/NavBar';
import { Inicio } from './components/Inicio'
import { Conhecimentos } from './components/Conhecimentos';
import { Contato } from './components/Contato';
import { Formacao } from './components/Formacao';
import { Cursos } from './components/Cursos';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <nav className="container">
          <div className="row" id="inicio">
            <div className="mt-5 pt-3" style={{minHeight: '95vh', width: '100%',}}>
              <Inicio/>
            </div>
          </div>
          <div className="row" id="formacao">
            <div className="mt-5 pt-3" style={{minHeight: '95vh', width: '100%',}}>
              <Formacao/>
            </div>
          </div>
          <div className="row" id="profissional">
            <div className="mt-5 pt-3" style={{minHeight: '95vh', width: '100%',}}>
              <Profissional/>
            </div>
          </div>
          <div className="row" id="conhecimentos">
            <div className="mt-5 pt-3" style={{minHeight: '95vh', width: '100%',}}>
              <Conhecimentos/>
            </div>
          </div>
          <div className="row" id="cursos">
            <div className="mt-5 pt-3" style={{minHeight: '95vh', width: '100%',}}>
              <Cursos/>
            </div>
          </div>
          <div className="row" id="contato">
            <div className="mt-5 pt-3" style={{minHeight: '60vh', width: '100%',}}>
              <Contato/>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default App;
