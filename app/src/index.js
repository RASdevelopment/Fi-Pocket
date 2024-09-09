import React from "react";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Map from "./pages/Map";
import Directory from "./pages/Directory";
import Archive from "./pages/Archive";
import SICEI from "./pages/SICEI";
import '../src/index.css';
import '../src/libs/icons/style.css';
/* import Docs from "./components/Docs/Docs";
import Cuatro from "./components/Docs/Archivos/Cuatro";
import Tres from "./components/Docs/Archivos/Tres";
import Dos from "./components/Docs/Archivos/Dos";
import Uno from "./components/Docs/Archivos/Uno"; */

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <News />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "directory",
        element: <Directory />,
      },
      {
        path: "archive",
        element: <Archive />,
        /*children: [
          {
            path: "",
            element: <Docs />,
            children: [
              {
                path: "/uno",
                element: <Uno />,
              },
              {
                path: "/dos",
                element: <Dos />,
              },
              {
                path: "/tres",
                element: <Tres />,
              },
              {
                path: "/cuatro",
                element: <Cuatro />,
              },
            ],
          },
        ],*/
      },
      {
        path: "SICEI",
        element: <SICEI />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
