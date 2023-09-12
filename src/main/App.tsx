import React, { useEffect, useState } from "react";
import { Grid } from "react-flexbox-grid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "@/presentation/pages";
import { ProductsForm } from "@/presentation/pages/products-form";
import { Cart, CartContext, CartContextType } from "./context";
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
function App() {
  const [state, setState] = useState<{ cart: Cart }>({
    cart: [],
  });

  useEffect(() => {
    console.log("from App", state);
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ cart: state.cart, setState }}>
      <RouterProvider router={router} />;
    </CartContext.Provider>
  );
}

export default App;
