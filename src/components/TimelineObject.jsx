import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaTags } from 'react-icons/fa';

import './TimelineObject.scss';

const TimelineObject = ({ exp, hoveredId, handleHover }) => {
  return (
    <div className="exp">
      <div className="marker">
        {hoveredId === exp._id && <FaChevronRight />}
      </div>
      <div
        className={`marker__line ${hoveredId === exp._id ? 'active' : ''}`}
      ></div>
      <Link to={`/resume/${exp.slug.current}`}>
        <div
          className="exp__item"
          key={exp._id}
          onMouseEnter={() => handleHover(exp._id)}
          onMouseLeave={() => handleHover(null)}
        >
          <div className="exp__works">
            <div className="exp__work">
              <h5 className="">
                {exp.startDateDisp.full} - {exp.endDateDisp.full}
              </h5>
              <h3 className="">{exp.jobTitle}</h3>
              <h4>@ {exp.company}</h4>
              <p>
                {exp.summary
                  ? exp.summary
                  : `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque.`}
              </p>
            </div>
            <div className="tags__container">
              <div className="tags">
                {exp.tags.slice(0, 3).map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className="tag-icon">
                <FaTags />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TimelineObject;
