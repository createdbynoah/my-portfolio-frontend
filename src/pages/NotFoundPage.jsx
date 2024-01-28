import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="app__container col app__primarybg">
      <div className="app__not-found">
        <h1>404</h1>
        <h2>Sorry... there's nothing here.</h2>
        <p>
          Return to <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
