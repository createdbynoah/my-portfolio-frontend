import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Project{id}</h1>
      <h1>Project{id}</h1>
      <h1>Project{id}</h1>
      <h1>Project{id}</h1>
      <h1>Project{id}</h1>
      <h1>Project{id}</h1>
    </div>
  );
};

export default ProjectPage;