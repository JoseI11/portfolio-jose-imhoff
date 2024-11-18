import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { ContactPage } from "./pages/Contact";

import { ProjectPage } from "./pages/Projects";
import { Root } from "./routes/root";
import ErrorPage from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
    ],

  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
