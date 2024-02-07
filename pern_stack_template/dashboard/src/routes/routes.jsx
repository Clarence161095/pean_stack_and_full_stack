import { createBrowserRouter } from 'react-router-dom';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import CommonLayout from '../layouts/CommonLayout';
import Login from '../pages/Login';
import MyInfo from '../pages/MyInfo';
import NotFound from '../pages/NotFound';
import Home from '../pages/home/Home';
import Announcement from '../pages/home/announcement/Announcement';
import Graph from '../pages/home/graph/Graph';
import GenericData from '../pages/settings/GenericData';
import Setting from '../pages/settings/Setting';
import UploadCsv from '../pages/settings/UploadCsv';

const routesConfigs = [
  {
    element: <CommonLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        element: <AuthenticatedLayout />,
        errorElement: <NotFound />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/home',
            element: <Home />,
          },
          {
            path: 'home',
            children: [
              {
                path: 'graph',
                element: <Graph />,
              },
              {
                path: 'announcement',
                element: <Announcement />,
              },
            ],
          },
          {
            path: 'my-info',
            element: <MyInfo />,
          },
          {
            path: 'setting',
            element: <Setting />,
          },
          {
            path: 'setting',
            children: [
              {
                path: 'upload-csv',
                element: <UploadCsv />,
              },
              {
                path: 'generic-data',
                element: <GenericData />,
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
