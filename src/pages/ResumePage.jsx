import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTags } from 'react-icons/fa';

import { ImageHeading } from '../components';
import { images } from '../constants';

import { useSanityContext } from '../context/SanityContext';

import './ResumePage.scss';

const ResumePage = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { workExperiences } = useSanityContext();

  return (
    <div className="app__container col">
      <ImageHeading
        image={images.pegboard}
        title="Experience"
        height={350}
        bgPosition={[15, 15]}
      />
      <section className="experiences__container">
        <div className="col-a">
          {workExperiences
            ?.filter((_, i) => i % 2 === 0)
            .map((exp, index) => (
              <div className="exp">
                <div className="marker">
                  {hoveredId === exp._id && <FaChevronRight />}
                </div>
                <div
                  className={`marker__line ${
                    hoveredId === exp._id ? 'active' : ''
                  }`}
                ></div>

                <div
                  className="exp__item"
                  key={exp._id}
                  onMouseEnter={() => setHoveredId(exp._id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="exp__works">
                    <div className="exp__work" key={exp.name}>
                      <h5 className="">
                        {exp.startDateDisp.full} - {exp.endDateDisp.full}
                      </h5>
                      <h3 className="">{exp.jobTitle}</h3>
                      <h4>@ {exp.company}</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque.
                      </p>
                    </div>
                    <div className="tags__container">
                      <div className="tags">
                        {exp.tags.slice(0, 3).map((tag) => (
                          <div className="tag">{tag}</div>
                        ))}
                      </div>
                      <div className="tag-icon">
                        <FaTags />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="timeline">
          <div className="arrow-start"></div>
          <div className="line"></div>
          <div className="dot-end"></div>
        </div>
        <div className="col-b">
          {workExperiences
            ?.filter((_, i) => i % 2 !== 0)
            .map((exp, index) => (
              <div className="exp">
                <div className="marker">
                  {hoveredId === exp._id && <FaChevronRight />}
                </div>
                <div
                  className={`marker__line ${
                    hoveredId === exp._id ? 'active' : ''
                  }`}
                ></div>
                <div
                  className="exp__item"
                  key={exp._id}
                  onMouseEnter={() => setHoveredId(exp._id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="exp__works">
                    <div className="exp__work" key={exp.name}>
                      <h5 className="">
                        {exp.startDateDisp.full} - {exp.endDateDisp.full}
                      </h5>
                      <h3 className="">{exp.jobTitle}</h3>
                      <h4>@ {exp.company}</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque.
                      </p>
                    </div>
                    <div className="tags__container">
                      <div className="tag-icon">
                        <FaTags />
                      </div>
                      <div className="tags">
                        {exp.tags.slice(0, 3).map((tag) => (
                          <div className="tag">{tag}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
