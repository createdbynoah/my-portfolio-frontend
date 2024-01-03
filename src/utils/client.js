import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const options = {
    dataset: import.meta.env.VITE_SANITY_DATASET,
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    useCdn: true,
    apiVersion: '2024-01-02',
    token: import.meta.env.VITE_SANITY_TOKEN,
    };

export const client = createClient(options);

const builder = imageUrlBuilder(client);

export const urlFor = (source) =>  builder.image(source);
