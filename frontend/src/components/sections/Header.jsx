import React, { useState, useEffect } from 'react';
import ShieldIcon from '../ui/shield-icon';
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
          <ShieldIcon className="logo-icon" size={32} />
          <span className="logo-text">VeriHub</span>
        </div>
        
        <nav className="nav-menu">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#demo" className="nav-link">Demo</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;