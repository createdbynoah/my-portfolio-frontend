import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ImageHeading } from '../components';
import { images } from '../constants';

const AboutPage = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  return (
    <div className="app__container col">
      <ImageHeading
        image={images.family}
        title="About Me"
        height={350}
        bgPosition={isMobile ? [5, 5] : [20, 20]}
      />
    </div>
  );
};

export default AboutPage;
