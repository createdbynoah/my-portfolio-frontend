import React from 'react';

import './ProjectButtons.scss';

const ProjectButtons = ({ projectLink, codeLink }) => {
  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, '_blank');
  };
  return (
    <div className="project__details-buttons">
      <button type="button" onClick={(e) => handleClick(e, projectLink)}>
        <div className="project__details-button">
          <span>View Project</span>
        </div>
      </button>
      <button
        type="button"
        onClick={(e) => handleClick(e, codeLink)}
        disabled={!codeLink}
      >
        <div className="project__details-button">
          <span>{!codeLink ? 'Source Code Not Available' : 'View Code'}</span>
        </div>
      </button>
    </div>
  );
};

export default ProjectButtons;
