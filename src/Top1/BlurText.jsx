import React from 'react';
import { motion } from 'framer-motion';

export default function BlurText({
  text,
  delay = 0,
  animateBy = 'letters',
  direction = 'top', 
  className = '',
}) {
  const parts = animateBy === 'words' ? text.split(' ') : text.split('');

  const directionOffset = {
    top: { y: 30, x: 0 },
    bottom: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  };

  // Detect if the browser is Chrome
  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  const initialBlur = isChrome ? 'blur(4px)' : 'blur(10px)'; // Reduced blur for Chrome

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {parts.map((char, idx) => (
        <motion.span
          key={idx}
          initial={{
            opacity: 0,
            filter: initialBlur,
            ...directionOffset[direction],
            translateZ: 0, // Force hardware acceleration
          }}
          whileInView={{
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 0.6,
            delay: delay / 1000 + idx * 0.08,
            ease: 'easeOut',
          }}
          viewport={{ once: false, amount: 0.5 }} 
          className="inline-block"
          style={{
            willChange: 'opacity, filter, transform', // Optimize for performance
            backfaceVisibility: 'hidden', // Prevent flickering
          }}
        >
          {char}
          {animateBy === 'words' ? '\u00A0' : ''}
        </motion.span>
      ))}
    </div>
  );
}
