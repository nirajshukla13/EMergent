import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import '../../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`verihub-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Shield className="logo-icon" size={32} />
          <span className="logo-text">VeriHub</span>
        </div>
        
        <nav className="nav-menu">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#demo" className="nav-link">Demo</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </nav>

        <div className="header-actions">
          <button className="btn-secondary-header">Login</button>
          <button className="btn-primary-header">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;