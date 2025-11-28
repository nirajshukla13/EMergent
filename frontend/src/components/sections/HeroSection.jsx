import React from 'react';
import { ArrowRight } from 'lucide-react';
import ShieldIcon from '../ui/shield-icon';
import '../../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in-up">
          Verify Media Instantly
          <br />
          <span className="gradient-text">with AI</span>
        </h1>
        
        <p className="hero-subtitle animate-fade-in-up delay-1">
          Combat deepfakes and misinformation with cutting-edge AI verification.
          <br />
          Generate trusted badges and detailed reports in seconds.
        </p>
        
        <div className="hero-cta animate-fade-in-up delay-2">
          <button className="btn-primary-large">
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="hero-stats animate-fade-in-up delay-3">
          <div className="stat-item">
            <div className="stat-value">99.2%</div>
            <div className="stat-label">Accuracy Rate</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">127K+</div>
            <div className="stat-label">Media Verified</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">3.2s</div>
            <div className="stat-label">Avg Processing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;