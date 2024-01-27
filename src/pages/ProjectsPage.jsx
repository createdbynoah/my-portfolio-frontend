import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { useSanityContext } from '../context/SanityContext';
import { Work } from '../container';
import { ImageHeading } from '../components';
import { images } from '../constants/';

import './ProjectsPage.scss';

const ProjectsPage = () => {
  const { projects, projectCategories } = useSanityContext();
  const [activeFilter, setActiveFilter] = useState('All');
  const [filterProjects, setFilterProjects] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    if (projects && projects.length > 0) {
      setFilterProjects(projects);
    }
  }, [projects]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item.name);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      const filter = projects.filter((proj) =>
        proj.categories.some((category) => category.name === item.name)
      );
      setFilterProjects(filter);
    }, 500);
  };
  return (
    <div className="app__container col">
      <ImageHeading
        image={images.blocks}
        title="Projects"
        bgPosition={[40, 40]}
        height={350}
      />
      <section className="projects__container">
        <div className="projects__project-filter">
          {projectCategories.map((item) => (
            <div
              key={item._id}
              onClick={() => handleWorkFilter(item)}
              className={`projects__project-filter-item app__flex p-text ${
                activeFilter === item.name ? 'item-active' : ''
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
        <motion.div
          className="projects__project-cards app__work-portfolio"
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
        >
          {filterProjects.map((project, index) => (
            <Link
              to={`/projects/${project.slug.current}`}
              key={project._id}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Work project={project} hoverLinks={false} />
            </Link>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;
