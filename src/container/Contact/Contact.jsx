import React, { useState } from 'react';

import { images, emailUrl } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { setContact } from '../../utils/client';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    };

    try {
      await setContact(contact);
      // fetch email url post request
      await fetch(emailUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      setIsLoading(false);
      setIsFormSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2 className="head-text">Contact Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:noah@noahrodgers.dev" className="p-text">
            Email
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a className="p-text">LinkedIn</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div>
            <textarea
              className="p=text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__footer'),
  'contact',
  'app__whitebg'
);
