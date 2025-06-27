import {
  createBrowserRouter,
} from "react-router";
import Root from "../Root";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            element: <Home></Home>
        },
        
    ]
  },
]);