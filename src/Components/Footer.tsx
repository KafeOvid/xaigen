import React, { useEffect } from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2>AI Video Generator</h2>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="mailto:info@aivideogenerator.com"><FaEnvelope /> info@aivideogenerator.com</a></li>
            <li><a href="tel:+1234567890"><FaPhone /> +1 234 567 890</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h4>Subscribe to Our Newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

        {/* Social Media Icons */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>© 2024 AI Video Generator. All Rights Reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top" id="backToTop">
        <FaArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
