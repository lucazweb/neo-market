import React, { useEffect, useState, useContext } from "react";
import { Header, Product } from "@/presentation/components";
import { Col, Row } from "react-flexbox-grid";
import { ProductWrapper } from "./styled";
import { data } from "@/assets/mock-data";
import { Product as ProductType } from "@/domain/models/products";
import { CartContext } from "@/main/context";

export type CartProps = {
  cart: {
    product: ProductType;
    qtd: number;
  }[];
};

export const Home = () => {
  const { cart, setState } = useContext(CartContext);

  const handlePurchase = (item: ProductType) => {
    const productInCart = cart.find((p) => p.product.id === item.id);
    if (!!productInCart) {
      const updated = cart.map((cartItem) => {
        if (cartItem.product.id === productInCart.product.id) {
          return {
            ...cartItem,
            product: { ...cartItem.product, qtd: cartItem.qtd + 1 },
          };
        }
        return cartItem;
      });
    } else {
      const data = [
        ...cart,
        {
          product: item,
          qtd: 1,
        },
      ];

      setState!({
        cart: data,
      });
    }
  };

  return (
    <>
      <Header />
      <Row>
        <Col md={12}>
          <h2>Mega Ofertas</h2>
        </Col>
        <Col md={12}>
          <Row center="md">
            <Col xs={12} sm={12} md={10}>
              <ProductWrapper>
                {data.map((p) => (
                  <Product
                    key={p.id}
                    data={p}
                    handlePurchase={handlePurchase}
                  />
                ))}
              </ProductWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
