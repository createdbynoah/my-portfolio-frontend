import React, { createContext, useContext, useState, useEffect } from 'react';

import {
  getAbouts,
  getExperiences,
  getProject,
  getProjects,
  getWorks,
  getSkills,
  getTestimonials,
  urlFor,
} from '../utils/client';

const SanityContext = createContext();

const SanityProvider = ({ children }) => {
  const [abouts, setAbouts] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [project, setProject] = useState([]);
  const [skills, setSkills] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchAbouts = async () => {
      const abouts = await getAbouts();
      setAbouts(abouts);
    };
    const fetchExperiences = async () => {
      const experiences = await getExperiences();
      setExperiences(experiences);
    };
    const fetchProjects = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };
    const fetchWorks = async () => {
      const works = await getWorks();
      setWorks(works);
    };
    const fetchSkills = async () => {
      const skills = await getSkills();
      setSkills(skills);
    };
    const fetchTestimonials = async () => {
      const raw = await getTestimonials();
      const testimonials = raw.map((testimonial) => {
        return {
          ...testimonial,
          imageUrl: urlFor(testimonial.imageUrl),
          short:
            testimonial.testimonial.length > 350
              ? testimonial.testimonial.slice(0, 350) + '...'
              : null,
          expanded: false,
        };
      });
      setTestimonials(testimonials);
    };
    fetchAbouts();
    fetchExperiences();
    fetchProjects();
    fetchWorks();
    fetchSkills();
    fetchTestimonials();
  }, []);

  const findProjectById = async (id) => {
    const project = await getProject(id);
    setProject(project);
  };

  const value = {
    abouts,
    experiences,
    projects,
    works,
    project,
    findProjectById,
    skills,
    testimonials,
  };

  return (
    <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
  );
};

const useSanityContext = () => useContext(SanityContext);

export { SanityProvider, useSanityContext };
