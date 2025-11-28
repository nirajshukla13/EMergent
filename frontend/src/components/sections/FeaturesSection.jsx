import React from 'react';
import { Shield, BadgeCheck, FileText, Lock, Activity, Layers } from 'lucide-react';
import { features } from '../../mockData';
import '../../styles/FeaturesSection.css';

const iconMap = {
  Shield: Shield,
  BadgeCheck: BadgeCheck,
  FileText: FileText,
  Lock: Lock,
  Activity: Activity,
  Layers: Layers
};

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="section-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need to verify media authenticity with confidence
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id} 
                className="feature-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-wrapper">
                  <IconComponent className="feature-icon" size={28} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;