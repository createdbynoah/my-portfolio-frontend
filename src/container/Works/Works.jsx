import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { IoMdCode } from 'react-icons/io';

import { motion } from 'framer-motion';
import { Work } from '../../container';
import { AppWrap, MotionWrap } from '../../wrapper';
import { useSanityContext } from '../../context/SanityContext';
import { urlFor } from '../../utils/client';
import './Works.scss';

const Works = () => {
  const { works, projects } = useSanityContext();
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWorks, setFilterWork] = useState([]);

  useEffect(() => {
    if (projects && projects.length > 0) {
      setFilterWork(projects);
    }
    console.log('projects', projects);
  }, [projects]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === 'All') {
        setFilterWork(works);
      } else {
        const filter = works.filter((work) => work.tags.includes(item));
        setFilterWork(filter);
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        Things I've <span>Made</span>
      </h2>
      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <Work key={index} project={work} />
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Works, 'app__works'),
  'work',
  'app__primarybg'
);
