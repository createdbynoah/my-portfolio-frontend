import React from 'react';

import { TimelineObject } from '../../components';

const JobsTimeline = ({ workExperiences, handleHover, hoveredId }) => {
  return (
    <section className="experiences__container">
      <div className="col-a">
        {workExperiences
          ?.filter((_, i) => i % 2 === 0)
          .map((exp) => (
            <TimelineObject
              exp={exp}
              key={exp._id}
              hoveredId={hoveredId}
              handleHover={handleHover}
            />
          ))}
      </div>
      <div className="timeline">
        <div className="arrow-start"></div>
        <div className="line"></div>
        <div className="dot-end"></div>
      </div>
      <div className="col-b">
        {workExperiences
          ?.filter((_, i) => i % 2 !== 0)
          .map((exp) => (
            <TimelineObject
              exp={exp}
              key={exp._id}
              hoveredId={hoveredId}
              handleHover={handleHover}
            />
          ))}
      </div>
    </section>
  );
};

export default JobsTimeline;
