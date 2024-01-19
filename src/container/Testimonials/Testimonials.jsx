import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../utils/client';
import './Testimonials.scss';

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialText, setTestimonialText] = useState('');

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    const getTestimonials = async () => {
      const raw = await client.fetch(testimonialsQuery);
      const testimonials = raw.map((testimonial) => {
        return {
          ...testimonial,
          imageUrl: urlFor(testimonial.imageUrl),
          short:
            testimonial.testimonial.length > 350
              ? testimonial.testimonial.slice(0, 350) + '...'
              : null,
          expanded: false,
        };
      });
      console.log(testimonials);
      setTestimonials(testimonials);
      setTestimonialText(
        testimonials[0].short
          ? testimonials[0].short
          : testimonials[0].testimonial
      );
    };

    const getBrands = async () => {
      const brands = await client.fetch(brandsQuery);
      setBrands(brands);
    };

    getTestimonials();
    getBrands();
  }, []);

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
      {testimonials.length && (
        <>
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
        </>
      )}
      {/* <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imageUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
);
