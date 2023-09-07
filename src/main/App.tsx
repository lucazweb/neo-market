import React from "react";
import { Grid } from "react-flexbox-grid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/presentation/pages";
import { ProductsForm } from "@/presentation/pages/products-form";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cadastrar-produto",
      element: <ProductsForm />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
