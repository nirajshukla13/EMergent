import React from 'react';
import './VerificationAnimation.css';

const VerificationAnimation = ({ size = 200 }) => {
  return (
    <div className="verification-animation" style={{ width: size, height: size }}>
      {/* Outer rotating ring */}
      <div className="verification-ring ring-outer"></div>
      
      {/* Middle pulsing ring */}
      <div className="verification-ring ring-middle"></div>
      
      {/* Inner rotating ring */}
      <div className="verification-ring ring-inner"></div>
      
      {/* Scanning lines */}
      <div className="scan-line scan-line-1"></div>
      <div className="scan-line scan-line-2"></div>
      
      {/* Center glow */}
      <div className="center-glow"></div>
      
      {/* Verification symbol */}
      <div className="verification-symbol">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M9 12L11 14L15 10M12 3L13.5 6L17 7L14.5 9.5L15 13L12 11.5L9 13L9.5 9.5L7 7L10.5 6L12 3Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default VerificationAnimation;
