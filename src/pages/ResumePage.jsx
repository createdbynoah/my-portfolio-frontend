import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTags } from 'react-icons/fa';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ImageHeading, JobsMobile, JobsTimeline } from '../components';
import { images } from '../constants';

import { useSanityContext } from '../context/SanityContext';

import './ResumePage.scss';

const ResumePage = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { workExperiences } = useSanityContext();

  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <div className="app__container col">
      <ImageHeading
        image={images.pegboard}
        title="Experience"
        height={350}
        bgPosition={[15, 15]}
      />
      {!isMobile && (
        <JobsTimeline
          handleHover={setHoveredId}
          hoveredId={hoveredId}
          workExperiences={workExperiences}
        />
      )}
      {isMobile && <JobsMobile workExperiences={workExperiences} />}
    </div>
  );
};

export default ResumePage;
