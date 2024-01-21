import React from 'react';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

import { urlFor } from '../utils/client';
import { useSanityContext } from '../context/SanityContext';

const ProjectPage = () => {
  const { projects } = useSanityContext();
  const { slug } = useParams();

  const project = projects.find((project) => project.slug.current === slug);

  return (
    <div className="app__container col">
      <header className="projects__heading">
        <h1>{project.name}</h1>
      </header>
      <section className="project__container">
        <div className="project__image">
          <img src={urlFor(project.heroImageUrl)} alt={project.name} />
        </div>
        <div className="project__content">
          <div className="project__description">
            <PortableText value={project.description_long} />
          </div>
          <div className="project__links">
            <a href={project.link} target="_blank" rel="noreferrer">
              <button className="app__button">View Project</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
