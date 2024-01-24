import React, { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import './ImageHeading.scss';

const ImageHeading = ({
  title,
  image,
  gradientColor = { dark: [4, 17, 21], light: [234, 246, 251] },
  textColor = { dark: '#e9eff1', light: '#0f1517' },
  className,
  bgPosition = [50, 50],
  height = 350,
}) => {
  const [imgHeight, setImgHeight] = useState(height);
  const isMobile900 = useMediaQuery('(max-width: 900px)');
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (isMobile900) {
      setImgHeight(height * 0.6);
    } else {
      setImgHeight(height);
    }
  }, [isMobile900, height]);

  const gradientColorValue = isDark ? gradientColor.dark : gradientColor.light;
  const textColorValue = isDark ? textColor.dark : textColor.light;
  const titleText = title.h1 ? title.h1 : title;
  const subtitleText = title.h2 ? title.h2 : null;

  const bgPositionValue = `${bgPosition[0]}% ${bgPosition[1]}%`;
  const background = `linear-gradient(rgba(${gradientColorValue[0]}, ${gradientColorValue[1]}, ${gradientColorValue[2]}, 1), rgba(${gradientColorValue[0]}, ${gradientColorValue[1]}, ${gradientColorValue[2]}, 0.2)), url(${image}) no-repeat`;
  return (
    <header
      className={className}
      style={{
        background: background,
        backgroundPosition: bgPositionValue,
        backgroundSize: 'cover',
        height: `${imgHeight}px`,
      }}
    >
      <h1
        style={{ color: `${textColorValue}` }}
        className={`${subtitleText ? 'with-subtitle' : ''}`}
      >
        {titleText}
      </h1>
      {subtitleText && <h2>{subtitleText}</h2>}
    </header>
  );
};

export default ImageHeading;
