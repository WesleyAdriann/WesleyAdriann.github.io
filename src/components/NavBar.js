import React from 'react';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active navBarItem" href="/">Inicio</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active navBarItem" href="/">Formação</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active navBarItem" href="/">Conhecimentos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active navBarItem" href="/">Contato</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active navBarItem" href="/">Profissional</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}