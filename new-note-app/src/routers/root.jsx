import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import homeRoute from './home';
import settingRoute from './setting';
import NotFound from '../components/NotFound';
import noteAppRoute from './note-app';

export const rootConfig = [
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [...homeRoute, ...noteAppRoute, ...settingRoute],
  },
];

const router = createBrowserRouter(rootConfig);

export default router;
