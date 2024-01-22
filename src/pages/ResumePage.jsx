import React from 'react';

import { ImageHeading } from '../components';
import { images } from '../constants';

// import './ResumePage.scss';

const ResumePage = () => {
  return (
    <div className="app__container col">
      <ImageHeading
        image={images.pegboard}
        title="Experience"
        height={350}
        bgPosition={[15, 15]}
      />
      <section className="projects__container"></section>
    </div>
  );
};

export default ResumePage;
