import { Product } from "@/domain/models/products";
import React, { createContext } from "react";

export type Cart = {
  product: Product;
  qtd: number;
}[];

export type CartContextType = {
  cart: {
    product: Product;
    qtd: number;
  }[];
  handleCartUpdate?: (cart: Cart) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
});
