import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTags } from 'react-icons/fa';

import { ImageHeading, TimelineObject } from '../components';
import { images } from '../constants';

import { useSanityContext } from '../context/SanityContext';

import './ResumePage.scss';

const ResumePage = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { workExperiences } = useSanityContext();

  return (
    <div className="app__container col">
      <ImageHeading
        image={images.pegboard}
        title="Experience"
        height={350}
        bgPosition={[15, 15]}
      />
      <section className="experiences__container">
        <div className="col-a">
          {workExperiences
            ?.filter((_, i) => i % 2 === 0)
            .map((exp) => (
              <TimelineObject
                exp={exp}
                key={exp._id}
                hoveredId={hoveredId}
                handleHover={setHoveredId}
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
                handleHover={setHoveredId}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
