import { createBrowserRouter } from "react-router-dom";
import Layout from '../layouts/Layout';
import Announcement from '../pages/home/Announcement';
import Graph from '../pages/home/Graph';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
      // TODO: Let's complete all route
    ]
  },
]);

export default router;