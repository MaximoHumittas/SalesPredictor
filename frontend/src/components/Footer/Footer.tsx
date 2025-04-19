import React from 'react';
import './Footer.css'; // Importando el archivo de estilos

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Mi Aplicación. Todos los derechos reservados.</p>
        <ul className="footer-nav">
          <li className="footer-nav-item"><a href="/privacidad">Política de privacidad</a></li>
          <li className="footer-nav-item"><a href="/terminos">Términos de servicio</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
