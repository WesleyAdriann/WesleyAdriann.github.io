import React, { Component } from 'react';
import './css/App.css';


import { Profissional } from './components/Profissional';
import { NavBar } from './components/NavBar';
import { Inicio } from './components/Inicio'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <nav className="container">
          <div className="row">
            <div className="mt-4" style={{minHeight: '100vh', width: '100%',}}>
              <Inicio/>
            </div>
          </div>
          <div className="row">
            <div className="mt-4" style={{minHeight: '100vh', width: '100%',}}>

              <Profissional/>

            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default App;
