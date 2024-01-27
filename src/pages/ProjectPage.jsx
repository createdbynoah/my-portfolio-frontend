import React from 'react';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

import { urlFor } from '../utils/client';
import { useSanityContext } from '../context/SanityContext';
import { ImageHeading, Sidebar, ListItem } from '../components';

import './ProjectPage.scss';

const ProjectPage = () => {
  const { projects } = useSanityContext();
  const { slug } = useParams();

  const project = projects.find((project) => project.slug.current === slug);

  return (
    <div className="app__container col app__whitebg">
      <ImageHeading
        image={urlFor(project?.heroImageUrl)}
        title={project?.name}
        height={350}
        bgPosition={[50, 50]}
      />
      <section className="project__container">
        <Sidebar item={project} buttons />
        <div className="project__content">
          <div className="project__description">
            <PortableText
              value={project?.description_long}
              components={{ listItem: ListItem }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
