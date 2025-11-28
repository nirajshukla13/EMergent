import React from 'react';
import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="verihub-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Shield size={28} />
              <span className="footer-logo-text">VeriHub</span>
            </div>
            <p className="footer-tagline">
              AI-powered media verification platform
              <br />
              for the modern digital age.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <a href="#features" className="footer-link">Features</a>
              <a href="#pricing" className="footer-link">Pricing</a>
              <a href="#demo" className="footer-link">Demo</a>
              <a href="#api" className="footer-link">API</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <a href="#about" className="footer-link">About</a>
              <a href="#blog" className="footer-link">Blog</a>
              <a href="#careers" className="footer-link">Careers</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <a href="#docs" className="footer-link">Documentation</a>
              <a href="#guides" className="footer-link">Guides</a>
              <a href="#support" className="footer-link">Support</a>
              <a href="#status" className="footer-link">Status</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <a href="#privacy" className="footer-link">Privacy Policy</a>
              <a href="#terms" className="footer-link">Terms of Service</a>
              <a href="#security" className="footer-link">Security</a>
              <a href="#compliance" className="footer-link">Compliance</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 VeriHub. All rights reserved.
          </p>
          <div className="footer-badge">
            <span className="badge-dot"></span>
            Powered by AI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;