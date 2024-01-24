import React from 'react';
import { useParams } from 'react-router-dom';

import { useSanityContext } from '../context/SanityContext';
import { images } from '../constants';
import { ImageHeading } from '../components';

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
      <section className="job__container"></section>
    </div>
  );
};

export default JobPage;
