import React from 'react';
import { Navbar } from '../components';
import {
  About,
  Contact,
  Header,
  Skills,
  Testimonials,
  Works,
} from '../container';

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      {/* <Contact /> */}
    </>
  );
};

export default HomePage;
