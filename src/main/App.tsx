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

const LOCAL_DATA_KEY = "neo-mkt";

export const handleLocalDataSave = (cart: Cart) => {
  localStorage.setItem(LOCAL_DATA_KEY, JSON.stringify(cart));
};

export const handleLocalDataParse = () => {
  if (!localStorage.getItem(LOCAL_DATA_KEY)) return;
  const data = localStorage.getItem(LOCAL_DATA_KEY);
  const cart = JSON.parse(data!);
  return cart;
};

function App() {
  const [state, setState] = useState<{ cart: Cart }>({
    cart: [],
  });

  useEffect(() => {
    // if (!localStorage.getItem(LOCAL_DATA_KEY)) return;
    // const data = localStorage.getItem(LOCAL_DATA_KEY);
    // const cart = JSON.parse(data!);

    const cart = handleLocalDataParse();

    if (cart) {
      setState({
        cart,
      });
    }
  }, []);

  const handleCartUpdate = (cart: Cart) => {
    setState({
      cart,
    });
    handleLocalDataSave(cart);
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, handleCartUpdate }}>
      <RouterProvider router={router} />;
    </CartContext.Provider>
  );
}

export default App;
