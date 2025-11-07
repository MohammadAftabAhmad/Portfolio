import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import ProjectDetailsPage from "../pages/projectdetails/ProjectDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/projectdetails",
        element: <ProjectDetailsPage />,
      },
    ],
  },
]);
export default router;
