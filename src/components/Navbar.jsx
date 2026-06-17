import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="glass-navbar-container">
      <nav className="glass-navbar">
        {/* Logo Section */}
        <a href="/" className="glass-navbar-logo">
          <i className="fa-solid fa-bolt" style={{ color: '#FBBF24' }}></i>
          <span>Nexify</span>
        </a>

        {/* Links Section */}
        <div className="glass-navbar-links">
          <NavLink to="/home" className="glass-navbar-link">Home</NavLink>
          <NavLink to="/features" className="glass-navbar-link">Features</NavLink>
          <NavLink to="/pricing" className="glass-navbar-link">Pricing</NavLink>
          <NavLink to="/contact" className="glass-navbar-link">Contact</NavLink>
        </div>

        {/* CTA Button */}
        <button className="glass-navbar-btn">Get Started</button>
      </nav>
    </header>
  );
}