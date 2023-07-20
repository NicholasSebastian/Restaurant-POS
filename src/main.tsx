import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createMemoryRouter, type RouteObject } from "react-router-dom";
import "./styles.css";

import App from "./App";
import Dashboard from "./Dashboard";
import History from "./History";
import Report from "./Report";

const routes: Array<RouteObject> = [
  { path: "/", element: <App /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/history", element: <History /> },
  { path: "/report", element: <Report /> }
];

const target = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(target);
const router = createMemoryRouter(routes, { initialEntries: ["/"] });

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
