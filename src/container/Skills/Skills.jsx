import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor } from '../../utils/client';
import { useSanityContext } from '../../context/SanityContext';
import './Skills.scss';
import { MoreLink } from '../../components';

const Skills = () => {
  const { skills, workExperiences } = useSanityContext();

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {workExperiences?.map((exp, index) => (
            <motion.div className="app__skills-exp-item" key={exp._id}>
              <div className="app__skills-exp-year">
                <p className="">
                  {index <= 1 &&
                    `${exp.startDateDisp.full} - ${exp.endDateDisp.full}`}
                  {index > 1 &&
                    `${exp.startDateDisp.year} - ${exp.endDateDisp.year}`}
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  // data-tooltip-id={exp.name}
                  // data-tooltip-content={exp.responsibilities}
                  key={exp.name}
                >
                  <h4 className="bold-text">{exp.jobTitle}</h4>
                  <p className="p-text">{exp.company}</p>
                  {/* <Tooltip id={exp.name} className="skills-tooltip"></Tooltip> */}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <MoreLink text="Learn More" path="/resume" />
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'experience',
  'app__whitebg'
);
