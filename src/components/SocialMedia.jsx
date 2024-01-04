import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.instagram.com/noah_rodgers"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/noahrodgers10/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="https://github.com/createdbynoah"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaGithub />
        </div>
      </a>
      <a
        href="https://www.facebook.com/noah.rodgers10"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
