import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import { images } from '../../constants';
import { SocialMedia, NavLinks } from '../../components';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

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

  const handleNavLinkClick = (link) => {
    setToggle(false);
    setActiveLink(link);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" onClick={() => handleNavLinkClick('')}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links" id="nav-links">
        <NavLinks clickNavLink={handleNavLinkClick} activeLink={activeLink} />
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              // whileInView={{ x: [300, 0] }}
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: 400 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <NavLinks
                  clickNavLink={handleNavLinkClick}
                  activeLink={activeLink}
                  sidebar
                />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {!isMobile && <SocialMedia layout="row" />}
    </nav>
  );
};

export default Navbar;
