import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createMemoryRouter, type RouteObject } from "react-router-dom";
import "./styles.css";

import Layout from "./components/Layout";
import { OrderProvider } from "./pages/Menu/useOrders";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Accounting";

const routes: Array<RouteObject> = [
  { path: "/", element: <Menu /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/report", element: <Report /> }
];

// Wrap each route with the Layout.
for (const route of routes) {
  route.element = <Layout>{route.element}</Layout>
}

const target = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(target);
const router = createMemoryRouter(routes, { initialEntries: ["/"] });

root.render(
  <React.StrictMode>
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  </React.StrictMode>
);
