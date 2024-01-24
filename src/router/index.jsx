import { createBrowserRouter } from 'react-router-dom';

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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
