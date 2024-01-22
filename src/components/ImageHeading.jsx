import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

import './ImageHeading.scss';

const ImageHeading = ({
  title,
  image,
  gradientColor = { dark: [4, 17, 21], light: [234, 246, 251] },
  textColor = { dark: '#e9eff1', light: '#0f1517' },
  className,
  bgPosition = [50, 50],
  height = '350px',
}) => {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');
  const bgColor = isDark ? gradientColor.dark : gradientColor.light;
  const headingColor = isDark ? textColor.dark : textColor.light;

  const backgroundPosition = `${bgPosition[0]}% ${bgPosition[1]}%`;
  const background = `linear-gradient(rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, 1), rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, 0.2)), url(${image}) no-repeat`;
  return (
    <header
      className={className}
      style={{
        background: background,
        backgroundPosition: backgroundPosition,
        backgroundSize: 'cover',
        height: `${height}`,
      }}
    >
      <h1 style={{ color: `${headingColor}` }}>{title}</h1>
    </header>
  );
};

export default ImageHeading;
