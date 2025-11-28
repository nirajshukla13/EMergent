import React from 'react';
import { Github, Mail } from 'lucide-react';
import ShieldIcon from '../ui/shield-icon';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="verihub-footer">
      <div className="footer-grid-overlay"></div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <ShieldIcon size={24} />
            <span className="footer-logo-text">VeriHub</span>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="mailto:contact@verihub.com" className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

          <p className="footer-copyright">
            © 2024 VeriHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;