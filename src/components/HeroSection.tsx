import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to Krushna</h1>
      <p>Your go-to solution for everything.</p>
      <motion.div className="status-badge">
        {/* Removed the "Available for opportunities" text */}
      </motion.div>
    </div>
  );
};

export default HeroSection;
