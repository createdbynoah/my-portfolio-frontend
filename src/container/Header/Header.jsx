import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiShareBoxLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { GoArrowDownRight } from 'react-icons/go';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [isHovering, setIsHovering] = useState({
    linkedin: false,
    resume: false,
  });

  const handleEnter = (key) => {
    setIsHovering({ ...isHovering, [key]: true });
  };

  const handleLeave = (key) => {
    setIsHovering({ ...isHovering, [key]: false });
  };

  const isMobile = useMediaQuery('(max-width: 900px)');
  return (
    <div className="grid__main">
      <div className="item-a">
        <h1>
          Hi, I'm <span>Noah</span>.
        </h1>
        {isMobile && (
          <div className="item-a__img">
            <div className="item-a__img-bg">
              <img src={images.noahSquare} alt="profile_circle" />
            </div>
          </div>
        )}

        <h2>Full-Stack Developer</h2>
        <h3>
          Excited by strategic and excellent form + function. <br />
          Attentive to detail and passionate about thoughtful design.
        </h3>
        <div className="buttons">
          <a
            className="hero__btn"
            href="https://www.linkedin.com/in/noahrodgers10/"
            target="_blank"
            onMouseEnter={() => handleEnter('linkedin')}
            onMouseLeave={() => handleLeave('linkedin')}
          >
            Say Hello{isHovering.linkedin && <FaLinkedin />}
          </a>
          <Link
            className="hero__btn outline"
            to="/resume"
            onMouseEnter={() => handleEnter('resume')}
            onMouseLeave={() => handleLeave('resume')}
          >
            Resume{isHovering.resume && <RiShareBoxLine />}
          </Link>
        </div>
      </div>
      {!isMobile && (
        <div className="item-b">
          <img src={images.noah} alt="profile_bg" />
        </div>
      )}
    </div>
  );
};

export default AppWrap(MotionWrap(Header, 'app__header'), 'home');
