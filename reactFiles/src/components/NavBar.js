import React from 'react';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active navBarItem" href="#inicio">Inicio</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active navBarItem" href="#formacao">Formação</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active navBarItem" href="#profissional">Profissional</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active navBarItem" href="#conhecimentos">Conhecimentos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active navBarItem" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}