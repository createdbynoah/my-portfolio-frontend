import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

import { images } from '../../constants';
import { SocialMedia } from '../../components';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0) {
        nav.classList.add('shadow');
      } else {
        nav.classList.remove('shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = useMediaQuery('(max-width: 900px)');
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  let logo;
  if (isDarkMode && isMobile) {
    logo = images.markDark;
  } else if (isDarkMode && !isMobile) {
    logo = images.logoDark;
  } else if (!isDarkMode && isMobile) {
    logo = images.markLight;
  } else {
    logo = images.logoLight;
  }

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links" id="nav-links">
        {['home', 'about', 'work', 'testimonials', 'contact'].map((item) => (
          <li className="app__flex p-text pointer" key={`link-${item}`}>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'works', 'testimonials', 'contact'].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
      {!isMobile && <SocialMedia layout="row" />}
    </nav>
  );
};

export default Navbar;
