import { createBrowserRouter } from "react-router-dom"; // make sure this is 'react-router-dom'
import Root from "../Root";
import Home from "../Home/Home";
import ProjectDetails from "../ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // ✅ Use 'element' here, not 'Component'
    children: [
      {
        index: true, // ✅ This means it's the default child route of "/"
        element: <Home />
      },
    ]
  },
  {
    path: "/project/:id",
    element: <ProjectDetails /> // ✅ Correct usage
  }
]);
