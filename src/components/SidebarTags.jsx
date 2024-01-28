import React from 'react';

const SidebarTags = ({ tags, title }) => {
  return (
    <div className="project__details-tags">
      <h3 className="project__details-tags-title">{title}</h3>
      <ul className="project__details-tags-list">
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarTags;
