import React from 'react';

import { Link } from 'react-router-dom';
import { useSanityContext } from '../context/SanityContext';
import { Work } from '../container';
import { ImageHeading } from '../components';
import { images } from '../constants/';

import './ProjectsPage.scss';

const ProjectsPage = () => {
  const { projects, works } = useSanityContext();
  return (
    <div className="app__container col">
      <ImageHeading
        image={images.blocks}
        title="Projects"
        bgPosition={[40, 40]}
        height={350}
      />
      <section>
        <div className="projects__container app__work-portfolio">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.slug.current}`} key={project._id}>
              <Work project={project} hoverLinks={false} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
