import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { IoMdCode } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';
import { HiDotsHorizontal } from 'react-icons/hi';

import { motion } from 'framer-motion';

import { urlFor } from '../../utils/client';

import './Works.scss';

const Work = ({ project, hoverLinks }) => {
  return (
    <div className={`app__work-item app__flex ${!hoverLinks && 'pointer'}`}>
      {project.rank <= 2 && (
        <div className="app__work-star">
          <IoStar />
        </div>
      )}
      <div className="app__work-img app__flex">
        <img src={urlFor(project.heroImageUrl)} alt={project.name} />
        {hoverLinks && (
          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: 'easeInOut',
              staggerChildren: 0.5,
            }}
            className="app__work-hover app__flex"
          >
            <a href={project.projectLink} target="_blank" rel="noreferrer">
              <motion.div
                // whileHover={{ scale: 0.9 }}
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            </a>
            {project.codeLink ? (
              <a href={project.codeLink} target="_blank" rel="noreferrer">
                <motion.div
                  // whileHover={{ scale: [1, 0.9] }}
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <IoMdCode />
                </motion.div>
              </a>
            ) : (
              <p>
                <motion.div
                  // whileHover={{ scale: [1, 0.9] }}
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <IoMdCode />
                </motion.div>
              </p>
            )}
            <Link
              to={`/projects/${project.slug.current}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <motion.div
                // whileHover={{ scale: [1, 0.9] }}
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.25 }}
                className="app__flex disabled"
              >
                <HiDotsHorizontal />
              </motion.div>
            </Link>
          </motion.div>
        )}
      </div>

      <div className="app__work-content app__flex">
        <h4 className="bold-text">{project.name}</h4>
        <p className="p-text truncate" style={{ marginTop: 10 }}>
          {project.description_short}
        </p>
        <div className="app__work-tag app__flex">
          <p className="p-text">{project.tags ? project.tags[0] : ''}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
