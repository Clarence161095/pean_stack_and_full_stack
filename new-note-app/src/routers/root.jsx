import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import homeRoute from './home';
import noteRoute from './note';
import settingRoute from './setting';

export const rootConfig = [
  {
    element: <RootLayout />,
    children: [...homeRoute, ...noteRoute, ...settingRoute],
  },
];

const router = createBrowserRouter(rootConfig);

export default router;
