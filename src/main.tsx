import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorPage } from "./Pages/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.tsx";
import { RoadTripBlog } from "./Blogs/RoadTripBlog.tsx";
import { DealFortressBlog } from "./Blogs/DealfortressBlog.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portfolio/",
        element: <HomePage />,
      },
      {
        path: "portfolio/Roadtrip",
        element: <RoadTripBlog />,
      },
      {
        path: "portfolio/Dealfortress",
        element: <DealFortressBlog />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
