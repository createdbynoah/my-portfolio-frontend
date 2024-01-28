import { createBrowserRouter, Navigate } from 'react-router-dom';

import {
  HomePage,
  AboutPage,
  ProjectsPage,
  ResumePage,
  ProjectPage,
  NotFoundPage,
  JobPage,
} from '../pages/';
import { RootLayout } from '../layouts/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/projects/:slug',
        element: <ProjectPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '/resume/:slug',
        element: <JobPage />,
      },
      {
        path: '/not-found',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <Navigate to="/not-found" />,
      },
    ],
  },
]);

export default router;
