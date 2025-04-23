import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './NavBar.css'; // Importando el archivo de estilos

const Navbar: React.FC = () => {

  const { user, logout } = useAuth();


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Sales Predictor</h1>
      </div>
      <ul className="navbar-links">


        <li className="navbar-item">
          <Link to="/" className="navbar-link">Inicio</Link>
        </li>
        {user ? (

          <>

            <li className="navbar-item">
              <Link to="/dashboard" className="navbar-link">Panel de control</Link>
            </li>

            


            <li className="navbar-item">
              <Link to="/about" className="navbar-link">Sobre nosotros</Link>
            </li>


            <li className="navbar-item">
              <Link to="/profile" className="navbar-link">Usuario</Link>
            </li>

            <li className="navbar-item">
              <button className="logout-button" onClick={logout}>
                Cerrar sesión
              </button>
            </li>


          </>
          
        ) : (
          <>

            <li className="navbar-item">
              <Link to="/login" className="navbar-link">Login</Link>
            </li>

          
          </>

        )}


      </ul>
    </nav>
  );
};

export default Navbar;
