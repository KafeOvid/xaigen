import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Ensure you are using 'Link' from react-router-dom
import '../styles/Header.css';
import logo from '../assets/logo-removebg-preview.png'; // Import for logo

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="hheader">
      <div className="hheader-container">
        {/* Logo */}
        <div className="hlogo">
          <Link to="/">
            <img src={logo} alt="AI Gen Logo" className="hlogo-img" />
            <span>AI Gen</span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="hhamburger-menu"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`hbar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hbar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hbar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <nav className={`hnav ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
          <ul className="hnav-links">
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/video-generator" onClick={toggleMenu}>Video Generator</Link>
            </li>
            <li>
              <a href="#feature" onClick={toggleMenu}>Feature</a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#footer" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* Call-to-Action Buttons */}
        <div className="hcta-buttons">
          <div className="desktop-buttons">
            {/* Link to Login and SignUp Pages */}
            <Link to="/login">
              <button className="hcta-button hlogin-button">Login</button>
            </Link>
            <Link to="/signup">
              <button className="hcta-button hsignup-button">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
