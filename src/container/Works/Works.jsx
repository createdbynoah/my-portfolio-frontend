import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { IoMdCode } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Work } from '../../container';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useSanityContext } from '../../context/SanityContext';
import { urlFor } from '../../utils/client';
import './Works.scss';
import { MoreLink } from '../../components';

const Works = () => {
  const { projects } = useSanityContext();

  return (
    <>
      <h2 className="head-text">
        Things I've <span>Made</span>
      </h2>

      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {projects.slice(0, 3).map((proj) => (
          <Work key={proj._id} project={proj} hoverLinks />
        ))}
      </motion.div>
      <MoreLink text="View More" path="/projects" />
    </>
  );
};

export default AppWrap(
  MotionWrap(Works, 'app__works'),
  'work',
  'app__primarybg'
);
