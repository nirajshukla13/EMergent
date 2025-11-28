import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../../mockData';
import '../../styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Trusted by Professionals</h2>
          <p className="section-subtitle">
            See what industry experts say about VeriHub
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
              <div className="testimonial-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;