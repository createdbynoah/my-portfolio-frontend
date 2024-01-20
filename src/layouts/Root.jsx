import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const RootLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
