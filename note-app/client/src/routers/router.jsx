import { createBrowserRouter } from 'react-router-dom';
import Folders from '../components/Folders/Folders';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';
import Notes from '../components/Notes/Notes';

const routesConfigs = [
  {
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        element: <AuthenticatedLayout />,
        children: [
          {
            path: '/v2',
            element: <Home />,
            children: [
              {
                path: ':folderId',
                element: <Folders />,
                children: [
                  {
                    path: ':noteId',
                    element: <Notes />,
                  },
                ],
              },
            ],
          },
          {
            path: '/',
            element: <Home />,
            children: [
              {
                path: ':folderId',
                element: <Folders />,
                children: [
                  {
                    path: ':noteId',
                    element: <Notes />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routesConfigs);

export default router;
