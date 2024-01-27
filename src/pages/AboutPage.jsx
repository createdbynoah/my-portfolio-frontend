import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ImageHeading } from '../components';
import { images } from '../constants';

import './AboutPage.scss';

const AboutPage = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  return (
    <div className="app__container col">
      <ImageHeading
        image={images.family}
        title="About Me"
        height={350}
        bgPosition={isMobile ? [5, 5] : [20, 20]}
      />
      <section className="about__container">
        <div className="about__content">
          <div className="about__noah">
            <div className="about__noah-text">
              <h2>Noah is...</h2>
              <ul>
                <li>
                  engaging and communicative. I love to learn by listening and
                  asking good questions.
                </li>
                <li>a critical thinker and a natural problem solver.</li>
                <li>
                  a collaborator — always looking for ways to help others around
                  him.
                </li>
                <li>
                  expressive and energetic — definitely the guy at the party in
                  the very middle causing a scene in an effort to ensure people
                  are having a good time.
                </li>
                <li>
                  living right on the edge of spontaneous and slightly
                  terrifying. I'd rather be in the middle of the action than
                  watching from the sidelines.
                </li>
                <li>
                  a glass-half-full kinda guy. I tend to be optimistic and
                  hopeful (with a healthy dose of realism when it counts).
                </li>
                <li>
                  motivated by like-minded individuals with a high sense of
                  excellence and a natural bent towards curiousity.
                </li>
              </ul>
            </div>
            <div className="about__noah-images">
              <img src={images.colorado1} />
            </div>
          </div>
          <div className="about__interests">
            <div className="about__interests-text">
              <h2>In My Freetime</h2>
              <p>
                I enjoy spending time with my wife, playing with our dog, Scout,
                and giggling with my (almost) 2-year-old son, Davis. On
                vacation, you'll either find me in the mountains searching for a
                quiet spot away from the busy or in a big city diving headfirst
                into the chaos. I'm a classically-trained pianist and love to
                play the piano to relax or help me think through a problem.
              </p>

              <p>
                I perform well under pressure and I'm a quick learner. I thrive
                in the spotlight and can hold my own in front of a crowd.
              </p>
            </div>
            <div className="about__interests-images">
              <img src={images.colorado2} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
