import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: '-100vh',
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: '100vh',
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

const Contact = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="section"
    >
      <h2>Contact</h2>
      <p>
        아래 연락처로 편하게 연락주세요.
      </p>
      <ul>
        <li>Email: henrys200632@gmail.com</li>
        <li>GitHub: https://github.com/sh-Dang</li>
      </ul>
    </motion.div>
  );
};

export default Contact;
