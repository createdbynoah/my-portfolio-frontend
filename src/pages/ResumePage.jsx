import React from 'react';

import { ImageHeading } from '../components';
import { images } from '../constants';

// import './ResumePage.scss';

const ResumePage = () => {
  return (
    <div className="app__container col">
      <ImageHeading
        image={images.pegboard}
        title="Resume"
        height="350px"
        bgPosition={[15, 15]}
      />
      <section className="projects__container"></section>
    </div>
  );
};

export default ResumePage;
