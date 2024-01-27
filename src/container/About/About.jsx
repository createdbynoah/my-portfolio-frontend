import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

import { MoreLink } from '../../components';

const About = () => {
  const adjectives = ['Creative', 'Innovative', 'Professional'];
  const nouns = ['Excellence', 'Good Design', 'Quality'];

  const [adjective, setAdjective] = useState(adjectives[0]);
  const [noun, setNoun] = useState(nouns[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAdjective(adjectives[Math.floor(Math.random() * adjectives.length)]);
  //     setNoun(nouns[Math.floor(Math.random() * nouns.length)]);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <h2 className="head-text">
        Developing <span>{adjective}</span>
        <br /> Solutions With <span>{noun}</span>
      </h2>
      <p>
        I have a keen eye for the details that matter, and the wherewithal to
        execute upon them.
      </p>
      <MoreLink text="Read More" path="/about" />
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
