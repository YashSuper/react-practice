import React from "react";
import ReactDOM from "react-dom/client";
import App, { AppLayout } from "./App";
import { createBrowserRouter, outlet, RouterProvider } from "react-router-dom";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ResturantLanding from "./Pages/ResturantLanding";

// Route manager.
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:resturantId",
        element: <ResturantLanding />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
