import { createBrowserRouter } from 'react-router-dom';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import Folders from '../components/Folders/Folders';
import Notes from '../components/Notes';
import Login from '../pages/Login';
import FlexLayout from '../pages/FlexLayout';

const routesConfigs = [
  {
    path: 'flex-layout',
    element: <FlexLayout />,
  },
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
