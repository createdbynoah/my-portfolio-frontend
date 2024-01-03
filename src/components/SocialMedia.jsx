import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <FaGithub />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
};

export default SocialMedia;
