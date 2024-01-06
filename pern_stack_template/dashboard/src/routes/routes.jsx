import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Layout';
import Announcement from '../pages/home/Announcement';
import Graph from '../pages/home/Graph';
import Home from '../pages/home/Home';
import MyInfo from '../pages/MyInfo';
import Setting from '../pages/settings/Setting';
import UploadCsv from '../pages/settings/UploadCsv';
import GenericData from '../pages/settings/GenericData';
import NotFound from "../pages/NotFound";

const routesConfigs = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home",
        children: [
          {
            path: "graph",
            element: <Graph />
          },
          {
            path: "announcement",
            element: <Announcement />
          },
        ]
      },
      {
        path: "my-info",
        element: <MyInfo />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "setting",
        children: [
          {
            path: "upload-csv",
            element: <UploadCsv />
          },
          {
            path: "generic-data",
            element: <GenericData />
          },
        ]
      },
    ]
  },
]

const router = createBrowserRouter(routesConfigs);

export default router;