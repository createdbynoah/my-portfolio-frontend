import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

import { urlFor } from '../../utils/client';
import { useSanityContext } from '../../context/SanityContext';
import { MoreLink } from '../../components';

const About = () => {
  const { abouts } = useSanityContext();

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span>
        <br /> means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            key={about.title + index}
            className="app__profile-item"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={urlFor(about.imageUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      <MoreLink text="Read More" path="/about" />
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
