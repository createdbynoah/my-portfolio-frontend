import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

import { urlFor } from '../utils/client';
import { useSanityContext } from '../context/SanityContext';
import { ImageHeading } from '../components';

import './ProjectPage.scss';

const ProjectPage = () => {
  const { projects } = useSanityContext();
  const { slug } = useParams();

  const project = projects.find((project) => project.slug.current === slug);
  return (
    <div className="app__container col ">
      <ImageHeading
        image={urlFor(project?.heroImageUrl)}
        title={project?.name}
        height={350}
        bgPosition={[50, 50]}
      />
      <section className="project__container">
        <div className="project__details"></div>
        <div className="project__content">
          <div className="project__description">
            <PortableText value={project?.description_long} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
