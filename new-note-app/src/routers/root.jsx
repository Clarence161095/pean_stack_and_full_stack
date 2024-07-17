import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import homeRoute from './home';
import noteRoute from './note';
import settingRoute from './setting';
import NotFound from '../components/NotFound';

export const rootConfig = [
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [...homeRoute, ...noteRoute, ...settingRoute],
  },
];

const router = createBrowserRouter(rootConfig);

export default router;
