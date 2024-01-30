import React from 'react';
import { ProjectButtons } from '..';
import { SidebarTags } from '..';

import './Sidebar.scss';

const Sidebar = ({ item, buttons }) => {
  const isTags = item?.tags?.length;
  const isTools = item?.tools?.length;
  const isClient = item?.client?.name;

  const startDate = item.startDateDisp;
  const endDate = item.endDateDisp;

  // take out https:// and www. from url and trailing slash for display
  const url = item?.website
    ?.replace(/(^\w+:|^)\/\//, '')
    .replace(/\/$/, '')
    .replace(/^www\./, '');

  return (
    <div className="project__details">
      <div className="project__details-heading">
        <h2 className="project__details-title">Details</h2>
        {startDate && endDate && (
          <>
            <p className="project__details-date">
              {startDate.full} - {endDate.full}
            </p>
            <p>
              <a href={item.website} target="_blank">
                {url}
              </a>
            </p>
          </>
        )}
      </div>
      {buttons && (
        <ProjectButtons
          projectLink={item?.projectLink}
          codeLink={item?.codeLink}
        />
      )}

      <div className="project__details-summary">
        {isClient && (
          <>
            <h3>Client</h3>
            <p>
              <a href={item?.client?.url} target="_blank">
                {item?.client?.name}
              </a>
            </p>
          </>
        )}
        <h3 className="project__details-summary-title">Summary</h3>
        <p className="project__details--summary-text">
          {item?.description_short || item?.summary}
        </p>
      </div>
      {isTags && <SidebarTags tags={item?.tags} title="Tags" />}
      {isTools && <SidebarTags tags={item?.tools} title="Tools" />}
    </div>
  );
};

export default Sidebar;
