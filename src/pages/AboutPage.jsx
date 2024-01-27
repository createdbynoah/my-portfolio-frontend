import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ImageHeading, ListItem } from '../components';
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
                <ListItem>
                  engaging and communicative. I love to learn by listening and
                  asking good questions.
                </ListItem>
                <ListItem>
                  a critical thinker and a natural problem solver.
                </ListItem>
                <ListItem>
                  a collaborator — always looking for ways to help others around
                  him.
                </ListItem>
                <ListItem>
                  motivated by like-minded individuals with a high sense of
                  excellence and a natural bent towards curiousity.
                </ListItem>
                <ListItem>
                  expressive and energetic — definitely the guy at the party in
                  the very middle causing a scene in an effort to ensure people
                  have a good time.
                </ListItem>
                <ListItem>
                  living right on the edge of spontaneous and slightly
                  terrifying. I'd rather be in the middle of the action than
                  watching from the sidelines.
                </ListItem>
                <ListItem>
                  a glass-half-full kinda guy. I tend to be optimistic and
                  hopeful (with a healthy dose of realism when it counts).
                </ListItem>
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
            </div>
            <div className="about__interests-images">
              <img src={images.colorado2} />
            </div>
          </div>
          <div className="about__work">
            <div className="about__work-text">
              <h2>At Work</h2>
              <p>
                I'm a quick learner and perform well under pressure. I thrive in
                the spotlight and can hold my own in front of a crowd. I'm able
                to effectively communicate with stakeholders, bridging the
                translation layer between the technical and non-technical. I
                love working towards an achievable goal and grasping the vision
                behind my contributions. I thrive under leadership who sees my
                potential and pushes me to grow into it, offering guidance and
                support along the way.
              </p>
            </div>
            <div className="about__work-images">
              <img src={images.noahStudio} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
