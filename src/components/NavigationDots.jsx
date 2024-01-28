import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonials'].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className={`app__navigation-dot ${active === item ? 'active' : ''}`}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
