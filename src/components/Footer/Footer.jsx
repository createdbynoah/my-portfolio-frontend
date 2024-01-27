import React from 'react';
import { RiShareBoxLine } from 'react-icons/ri';
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
              <a href={contact.social.linkedin} target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={contact.resume}
                target="_blank"
                className="app__flex gap-1"
              >
                My Resume
                <span className="app__flex">
                  <RiShareBoxLine />
                </span>
              </a>
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
              <Link
                to="/projects/buy-my-gear"
                onClick={() => window.scrollTo(0, 0)}
              >
                BuyMyGear.
              </Link>
            </li>
            <li>
              <Link
                to="/projects/shuttle"
                onClick={() => window.scrollTo(0, 0)}
              >
                Shuttle
              </Link>
            </li>
            <li>
              <Link
                to="/project/smart-brain"
                onClick={() => window.scrollTo(0, 0)}
              >
                Smart Brain
              </Link>
            </li>
            <li>
              <Link
                to="/projects/yelp-camp"
                onClick={() => window.scrollTo(0, 0)}
              >
                YelpCamp
              </Link>
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
