import React from "react";
import { Grid } from "react-flexbox-grid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/presentation/pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
