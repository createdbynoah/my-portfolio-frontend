import React from 'react';
import { Link } from 'react-router-dom';

import { contact } from '../../constants';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__top-section">
        <div className="footer__top-section-a">
          <h5>Let's Connect</h5>
          <ul>
            <li>
              <a href={`mailto:${contact.email}`}>Email Me</a>
            </li>
            <li>
              <a href={contact.social.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={contact.links.resume}>My Resume</a>
            </li>
          </ul>
        </div>
        <div className="footer__top-section-b">
          <h5>Find Me</h5>
          <ul>
            <li>
              <a href={contact.links.github} target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href={contact.links.vimeo} target="_blank">
                Vimeo
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__top-section-c">
          <h5>Projects</h5>
          <ul>
            <li>
              <Link to="/projects/buy-my-gear">BuyMyGear.</Link>
            </li>
            <li>
              <Link to="/projects/shuttle">Shuttle</Link>
            </li>
            <li>
              <Link to="/project/smart-brain">Smart Brain</Link>
            </li>
            <li>
              <Link to="/projects/yelp-camp">YelpCamp</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer__bottom-section">
        <p>Made with ❤️ by Noah Rodgers</p>
        <p className="small-text">&copy; 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
