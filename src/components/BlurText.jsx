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

  const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  const initialBlur = isChrome ? 'blur(4px)' : 'blur(10px)';

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {parts.map((char, idx) => (
        <motion.span
          key={idx}
          initial={{
            opacity: 0,
            filter: initialBlur,
            ...directionOffset[direction],
            translateZ: 0,
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
          className="inline-block min-w-[1ch] text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300"
          style={{
            willChange: 'opacity, filter, transform',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased',
          }}
        >
          {char}
          {animateBy === 'words' ? '\u00A0' : ''}
        </motion.span>
      ))}
    </div>
  );
}
