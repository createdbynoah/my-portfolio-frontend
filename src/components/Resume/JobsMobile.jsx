import React from 'react';

import { TimelineObject } from '../../components';

const JobsMobile = ({ workExperiences, handleHover, hoveredId }) => {
  return (
    <section className="experiences__container">
      {workExperiences?.map((exp) => (
        <TimelineObject
          exp={exp}
          key={exp._id}
          isMobile
          hoveredId={hoveredId}
          handleHover={handleHover}
        />
      ))}
    </section>
  );
};

export default JobsMobile;
