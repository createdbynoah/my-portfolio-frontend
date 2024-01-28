import React, { createContext, useContext, useState, useEffect } from 'react';
import { DateTime } from 'luxon';

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
  const [loading, setLoading] = useState(true);
  const [abouts, setAbouts] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectCategories, setProjectCategories] = useState([]);
  const [works, setWorks] = useState([]);
  const [project, setProject] = useState([]);
  const [skills, setSkills] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchAbouts = async () => {
        const abouts = await getAbouts();
        setAbouts(abouts);
      };
      const fetchWorkExperiences = async () => {
        const experiences = await getWorkExperiences();
        console.log('experiences', experiences);
        const workExperiences = experiences.map((experience) => {
          const startDate = DateTime.fromFormat(
            experience.startDate,
            'MM-dd-yyyy'
          );
          const endDate =
            experience.endDate === 'Present'
              ? 'Present'
              : DateTime.fromFormat(experience.endDate, 'MM-dd-yyyy');

          const startDateDisp = {
            month: startDate.toFormat('MMM'),
            year: startDate.toFormat('yyyy'),
            full: startDate.toFormat('MMM yyyy'),
          };

          let endDateDisp;
          if (endDate === 'Present') {
            endDateDisp = {
              month: 'Present',
              year: 'Present',
              full: 'Present',
            };
          } else {
            endDateDisp = {
              month: endDate.toFormat('MMM'),
              year: endDate.toFormat('yyyy'),
              full: endDate.toFormat('MMM yyyy'),
            };
          }

          return {
            ...experience,
            startDate: startDate.toJSDate(),
            startDateDisp,
            endDate: endDate === 'Present' ? 'Present' : endDate.toJSDate(),
            endDateDisp,
          };
        });

        workExperiences.sort((a, b) => a.order - b.order);
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
      await Promise.all([
        fetchAbouts(),
        fetchWorkExperiences(),
        fetchProjects(),
        fetchProjectCategories(),
        fetchWorks(),
        fetchSkills(),
        fetchTestimonials(),
      ]);
      setLoading(false);
    };
    fetchData();
  }, []);

  const findProjectById = async (id) => {
    const project = await getProject(id);
    setProject(project);
  };

  const value = {
    abouts,
    loading,
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
