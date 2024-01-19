import React, { useState } from 'react';
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
          <a
            className="hero__btn outline"
            href=""
            target="_blank"
            onMouseEnter={() => handleEnter('resume')}
            onMouseLeave={() => handleLeave('resume')}
          >
            Resume{isHovering.resume && <RiShareBoxLine />}
          </a>
        </div>
        {isMobile && (
          <div className="item-a__img">
            <img src={images.noahSquare} alt="profile_circle" />
          </div>
        )}
      </div>
      {!isMobile && (
        <div className="item-b">
          <img src={images.noah} alt="profile_bg" />
        </div>
      )}

      {/* <div className="item-d">
        <GoArrowDownRight />
      </div> */}
    </div>
    // <div className="app__header app__flex">
    //   <motion.div
    //     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    //     transition={{ duration: 0.8 }}
    //     className="app__header-info"
    //   >
    //     <div className="app__header-badge">
    //       <div className="badge-cmp app__flex">
    //         <span>👋</span>
    //         <div style={{ marginLeft: 20 }}>
    //           <p className="p-text">Hello, I am</p>
    //           <h1 className="head-text">Noah</h1>
    //         </div>
    //       </div>
    //       <div className="tag-cmp app__flex">
    //         <p className="p-text">Full-Stack Developer</p>
    //         <p className="p-text">Designer</p>
    //       </div>
    //     </div>
    //   </motion.div>
    //   <motion.div
    //     whileInView={{ opacity: [0, 1] }}
    //     transition={{ duration: 0.5, delayChildren: 0.5 }}
    //     className="app__header-img"
    //   >
    //     <img src={images.noah} alt="profile_bg" />
    //     <motion.img
    //       whileInView={{ scale: [0, 1] }}
    //       transition={{ duration: 1, ease: 'easeInOut' }}
    //       src={images.circle}
    //       alt="profile_circle"
    //       className="overlay_circle"
    //     />
    //   </motion.div>
    //   <motion.div
    //     variant={scaleVariants}
    //     whileInView={scaleVariants.whileInView}
    //     className="app__header-circles"
    //   >
    //     {[images.flutter, images.redux, images.sass].map((item, index) => (
    //       <div
    //         key={`circle-${index}`}
    //         alt="circle"
    //         className="circle-cmp app__flex"
    //       >
    //         <img src={item} alt="circle" />
    //       </div>
    //     ))}
    //   </motion.div>
    // </div>
  );
};

export default AppWrap(MotionWrap(Header, 'app__header'), 'home');
