import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Web Development',
    description:
      'I have experience building websites and chrome extensions using JavaScript, React, HTML, CSS, and more.',
    imageURL: images.about01,
  },
  {
    title: 'Mobile Application Development',
    description:
      'I have experience building mobile application using React Native, Flutter, and Android Studio.',
    imageURL: images.about02,
  },
  {
    title: 'Machine Learning',
    description:
      'I have experience building machine learning models using Python, TensorFlow, PyTorch, and more.',
    imageURL: images.about03,
  },
  {
    title: 'Data Science',
    description:
      'I have experience working on data science projects using Python, R, and more.',
    imageURL: images.about04,
  },
  {
    title: 'Cloud Computing',
    description:
      'I have experience working on cloud computing projects using AWS, GCP, and more.',
    imageURL: images.about01,
  },
];

const About = () => {
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
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={about.imageURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
