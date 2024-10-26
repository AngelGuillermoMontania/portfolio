import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/components/Layout/Layout";
import Home from "../src/components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
