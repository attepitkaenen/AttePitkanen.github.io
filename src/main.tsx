import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorPage } from "./Pages/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GameDevPage } from "./Pages/GameDevPage.tsx";
import { HomePage } from "./Pages/HomePage.tsx";
import { WebDevPage } from "./Pages/WebDevPage.tsx";
import { ContactPage } from "./Pages/ContactPage.tsx";
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
        path: "portfolio/gamedev",
        element: <GameDevPage />,
      },
      {
        path: "portfolio/webdev",
        element: <WebDevPage />,
      },
      {
        path: "portfolio/webdev",
        element: <WebDevPage />,
      },
      {
        path: "portfolio/contact",
        element: <ContactPage />,
      },
      {
        path: "portfolio/Roadtrip",
        element: <RoadTripBlog />,
      },
      {
        path: "portfolio/Dealfortress",
        element: <DealFortressBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
