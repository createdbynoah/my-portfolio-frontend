import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor } from '../../utils/client';
import { useSanityContext } from '../../context/SanityContext';
import './Testimonials.scss';

const Testimonial = () => {
  const { testimonials } = useSanityContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialText, setTestimonialText] = useState('');

  const handleClick = (index) => {
    testimonials[index].expanded = false;
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (testimonials && testimonials.length > 0) {
      setTestimonialText(
        testimonials[currentIndex].short
          ? testimonials[currentIndex].short
          : testimonials[currentIndex].testimonial
      );
    }
  }, [testimonials, currentIndex]);

  const currTestimonial = testimonials[currentIndex];

  const handleReadMore = (index) => {
    if (testimonials[index].expanded) {
      setTestimonialText(testimonials[index].short);
      testimonials[index].expanded = false;
    } else {
      setTestimonialText(testimonials[index].testimonial);
      testimonials[index].expanded = true;
    }
  };

  return (
    <>
      <h2 className="head-text">
        What People <span>Say</span>
      </h2>
      {testimonials.length && (
        <div className="app__testimonials-container">
          <div className="app__testimonial-item app__flex">
            <div className="app__testimonial-content">
              <p className="p-text">
                {testimonialText}
                {currTestimonial.short && (
                  <a
                    className="p-text"
                    onClick={() => handleReadMore(currentIndex)}
                  >
                    {' ' +
                      (currTestimonial.expanded ? 'Read Less' : 'Read More')}
                  </a>
                )}
              </p>
              <div className="app__testimonial-footer">
                <a href={currTestimonial.linkedInUrl} target="_blank">
                  <img src={currTestimonial.imageUrl} alt="testimonial-image" />
                </a>
                <div className="app__testimonial-author">
                  <h4 className="bold-text">{currTestimonial.name}</h4>
                  <h5 className="p-text">
                    {currTestimonial.jobTitle} —{' '}
                    <span>{currTestimonial.company}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft size={30} />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight size={30} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
);
