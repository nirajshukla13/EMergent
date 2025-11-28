import React from 'react';
import { Upload, Cpu, CheckCircle, ArrowRight } from 'lucide-react';
import { steps } from '../../mockData';
import '../../styles/HowItWorksSection.css';

const iconMap = {
  Upload: Upload,
  Cpu: Cpu,
  CheckCircle: CheckCircle
};

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="section-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">How VeriHub Works</h2>
          <p className="section-subtitle">
            Three simple steps to verify your media content
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => {
            const IconComponent = iconMap[step.icon];
            return (
              <React.Fragment key={step.id}>
                <div className="step-card animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="step-number">{step.id}</div>
                  <div className="step-icon-wrapper">
                    <IconComponent className="step-icon" size={32} />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <div className="step-glow"></div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="step-arrow animate-on-scroll" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                    <ArrowRight size={24} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;