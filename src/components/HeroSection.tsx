import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div>
      <h1>Welcome to my portfolio!</h1>
      <motion.div>
        {/* Replaced the text section with an empty fragment */}
      </motion.div>
      <p>This is my resume.</p>
      <p>Check out my projects below.</p>
    </div>
  );
};

export default HeroSection;