import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

import { urlFor } from '../utils/client';
import { useSanityContext } from '../context/SanityContext';
import { ImageHeading, Sidebar, ListItem, Loading } from '../components';

import './ProjectPage.scss';

const ProjectPage = () => {
  const { projects, loading } = useSanityContext();
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      const foundProject = projects.find(
        (project) => project.slug.current === slug
      );

      if (!foundProject) {
        navigate('/not-found');
      }
    }
  }, [slug, loading, projects]);

  const project = projects.find((project) => project.slug.current === slug);

  return (
    <div className="app__container col app__whitebg">
      {loading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProjectPage;
