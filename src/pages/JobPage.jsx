import React from 'react';
import { PortableText } from '@portabletext/react';
import { useParams } from 'react-router-dom';

import { useSanityContext } from '../context/SanityContext';
import { images } from '../constants';
import { ImageHeading, Sidebar } from '../components';

import './JobPage.scss';

const JobPage = () => {
  const { workExperiences } = useSanityContext();
  const { slug } = useParams();

  const job = workExperiences.find((job) => job.slug.current === slug);

  return (
    <div className="app__container col app__whitebg">
      <ImageHeading
        image={images.desk}
        title={{ h1: job?.jobTitle, h2: `@ ${job?.company}` }}
        height={350}
        bgPosition={[50, 50]}
      />
      <section className="job__container">
        <Sidebar item={job} />
        <div className="job__content">
          <PortableText value={job?.responsibilities} />
          <PortableText value={job?.description} />
        </div>
      </section>
    </div>
  );
};

export default JobPage;
