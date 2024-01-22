import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ViewMore = ({ path, text }) => {
  return (
    <div className="app__more-link">
      <Link to={path}>
        {text} <FaArrowRight />
      </Link>
    </div>
  );
};

export default ViewMore;
