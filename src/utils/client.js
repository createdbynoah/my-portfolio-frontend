import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import memoize from 'memoizee';

const cacheTimeout = 1000 * 60 * 60;

const options = {
    dataset: import.meta.env.VITE_SANITY_DATASET,
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    useCdn: true,
    apiVersion: '2024-01-02',
    token: import.meta.env.VITE_SANITY_TOKEN,
    };

const client = createClient(options);

const builder = imageUrlBuilder(client);
const urlFor = (source) =>  builder.image(source);

const getAbouts = memoize(async () => {
    const query = `*[_type == "about" && isPublished == true]`;
    const abouts = await client.fetch(query);
    return abouts;
}, { maxAge: cacheTimeout });

const getWorks = memoize(async () => {
    const query = `*[_type == "works"]`;
    const works = await client.fetch(query);
    return works;
}, { maxAge: cacheTimeout });

const setContact = async (contact) => {
    const response = await client.create(contact);
    return response;
};

const getProjects = memoize(async () => {
    const query = `*[_type == "projects" && isPublished == true]`;
    const projects = await client.fetch(query);
    return projects;
}, { maxAge: cacheTimeout });

const getProject = memoize(async (id) => {
    const query = `*[_type == "projects" && _id == ${id}]`;
    const project = await client.fetch(query, {slug});
    return project;
}, { maxAge: cacheTimeout });

const getWorkExperiences = memoize(async () => {
    const query = `*[_type == "workExperiences" && isPublished == true]`;
    const workExperiences = await client.fetch(query);
    return workExperiences;
}, { maxAge: cacheTimeout });

const getSkills = memoize(async () => {
    const query = `*[_type == "skills"]`;
    const skills = await client.fetch(query);
    return skills;
}, { maxAge: cacheTimeout });

const getTestimonials = memoize(async () => {
    const query = `*[_type == "testimonials" && isPublished == true]`;
    const testimonials = await client.fetch(query);
    return testimonials;
}, { maxAge: cacheTimeout });

export {
    getAbouts,
    setContact,
    getWorks,
    getProjects,
    getProject,
    getWorkExperiences,
    getSkills,
    getTestimonials,
    urlFor
};