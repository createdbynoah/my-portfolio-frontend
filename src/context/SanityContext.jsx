import React, { createContext, useContext, useState, useEffect } from 'react';

import {
  getAbouts,
  getWorkExperiences,
  getProject,
  getProjects,
  getProjectCategories,
  getWorks,
  getSkills,
  getTestimonials,
  urlFor,
} from '../utils/client';

const SanityContext = createContext();

const SanityProvider = ({ children }) => {
  const [abouts, setAbouts] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectCategories, setProjectCategories] = useState([]);
  const [works, setWorks] = useState([]);
  const [project, setProject] = useState([]);
  const [skills, setSkills] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchAbouts = async () => {
      const abouts = await getAbouts();
      setAbouts(abouts);
    };
    const fetchWorkExperiences = async () => {
      const experiences = await getWorkExperiences();
      const workExperiences = experiences.map((experience) => {
        const startDateDisp = {
          month: new Date(experience.startDate).toLocaleString('default', {
            month: 'short',
          }),
          year: new Date(experience.startDate).getFullYear(),
          full:
            new Date(experience.startDate).toLocaleString('default', {
              month: 'short',
            }) +
            ' ' +
            new Date(experience.startDate).getFullYear(),
        };
        let endDateDisp;
        if (experience.endDate === 'Present') {
          endDateDisp = {
            month: 'Present',
            year: 'Present',
            full: 'Present',
          };
        } else {
          endDateDisp = {
            month: new Date(experience.endDate).toLocaleString('default', {
              month: 'short',
            }),
            year: new Date(experience.endDate).getFullYear(),
            full:
              new Date(experience.endDate).toLocaleString('default', {
                month: 'short',
              }) +
              ' ' +
              new Date(experience.endDate).getFullYear(),
          };
        }

        return {
          ...experience,
          startDate: new Date(experience.startDate),
          startDateDisp,
          endDate:
            experience.endDate === 'Present'
              ? 'Present'
              : new Date(experience.endDate),
          endDateDisp,
        };
      });
      workExperiences.sort((a, b) => a.order - b.order);
      console.log('work experiences', workExperiences);
      setWorkExperiences(workExperiences);
    };
    const fetchProjects = async () => {
      const projects = await getProjects();
      // sort by rank
      projects.sort((a, b) => a.rank - b.rank);
      setProjects(projects);
    };
    const fetchProjectCategories = async () => {
      const categories = await getProjectCategories();
      setProjectCategories(categories);
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
    fetchWorkExperiences();
    fetchProjects();
    fetchProjectCategories();
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
    workExperiences,
    projects,
    works,
    project,
    projectCategories,
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
