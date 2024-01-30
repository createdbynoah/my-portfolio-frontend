import React, { useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import { useParams, useNavigate } from 'react-router-dom';

import { useSanityContext } from '../context/SanityContext';
import { images } from '../constants';
import { ImageHeading, Sidebar, ListItem, Loading } from '../components';

import './JobPage.scss';

const JobPage = () => {
  const { workExperiences, loading } = useSanityContext();
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      const foundWorkExperience = workExperiences.find(
        (exp) => exp.slug.current === slug
      );

      if (!foundWorkExperience) {
        navigate('/not-found');
      }
    }
  }, [slug, loading, workExperiences]);

  const job = workExperiences.find((job) => job.slug.current === slug);

  return (
    <div className="app__container col app__whitebg">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageHeading
            image={images.desk}
            title={{ h1: job?.jobTitle, h2: `@ ${job?.company}` }}
            height={350}
            bgPosition={[50, 50]}
          />
          <section className="job__container">
            <Sidebar item={job} />
            <div className="job__content">
              <PortableText
                value={job?.responsibilities}
                components={{ listItem: ListItem }}
              />
              <PortableText value={job?.description} />
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default JobPage;
