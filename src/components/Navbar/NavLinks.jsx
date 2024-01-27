import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ clickNavLink, activeLink, sidebar }) => {
  return (
    <>
      <li className={!sidebar && 'app__flex p-text pointer'}>
        {!sidebar && <div></div>}
        <Link
          to="/"
          id="link-home"
          className={activeLink === 'home' ? 'active-link' : ''}
          onClick={() => clickNavLink('home')}
        >
          Home
        </Link>
      </li>
      <li className={!sidebar && 'app__flex p-text pointer'}>
        {!sidebar && <div></div>}
        <Link
          to="/about"
          id="link-about"
          className={activeLink === 'about' ? 'active-link' : ''}
          onClick={() => clickNavLink('about')}
        >
          About
        </Link>
      </li>
      <li className={!sidebar && 'app__flex p-text pointer'}>
        {!sidebar && <div></div>}
        <Link
          to="/projects"
          id="link-projects"
          className={activeLink === 'projects' ? 'active-link' : ''}
          onClick={() => clickNavLink('projects')}
        >
          Projects
        </Link>
      </li>
      <li className={!sidebar && 'app__flex p-text pointer'}>
        {!sidebar && <div></div>}
        <Link
          to="/resume"
          id="link-experience"
          className={activeLink === 'experience' ? 'active-link' : ''}
          onClick={() => clickNavLink('experience')}
        >
          Experience
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
