import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="glass-navbar-container">
      <nav className="glass-navbar">

        <a href="/" className="glass-navbar-logo">
          <i className="fa-solid fa-bolt" style={{ color: '#FBBF24' }}></i>
          <span>Nexify</span>
        </a>

        <div className="glass-navbar-links">
          <NavLink to="/" end className="glass-navbar-link">Home</NavLink>
          <NavLink to="/features" className="glass-navbar-link">Features</NavLink>
          <NavLink to="/portfolio" className="glass-navbar-link">Portfolio</NavLink>
          <NavLink to="/pricing" className="glass-navbar-link">Pricing</NavLink>
          <NavLink to="/contact" className="glass-navbar-link">Contact</NavLink>
        </div>

        <button className="glass-navbar-btn">Get Started</button>
      </nav>
    </header>
  );
}