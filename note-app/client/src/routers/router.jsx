import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import NotFoundPage from '../pages/NotFoundPage';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import Home from '../pages/Home';
import Folders from '../components/Folders';
import Notes from '../components/Notes';
import Login from '../pages/Login';

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
