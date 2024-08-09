import { HashLink as Link } from 'react-router-hash-link';
import './Cabecera.css';

function Header() {
  return (
    <div className="header-container">
      <div className="logo">SRL</div>
      <nav>
        <ul className="nav-links">
          <li><Link smooth to="/#inicio">Inicio</Link></li>
          <li><Link smooth to="/#services">Servicios</Link></li>
          <li><Link smooth to="/#tools">Herramientas</Link></li>
          <li><Link smooth to="/#about">Quienes Somos</Link></li>
          <li><Link to="/login" className="login-btn">Iniciar Sesión</Link></li>
          <li><Link to="/register" className="register-btn">Registrarse</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
