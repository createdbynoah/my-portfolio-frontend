import { createBrowserRouter } from 'react-router-dom';

import {
  HomePage,
  AboutPage,
  ProjectsPage,
  ResumePage,
  ProjectPage,
  NotFoundPage,
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
        path: '/projects/:id',
        element: <ProjectPage />,
      },

      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
