import React, { useEffect, useState, useContext } from "react";
import { Header, Product } from "@/presentation/components";
import { Col, Row } from "react-flexbox-grid";
import { ProductWrapper } from "./styled";
import { data } from "@/assets/mock-data";
import { Product as ProductType } from "@/domain/models/products";
import { CartContext } from "@/main/context";
import {
  Banner,
  HalfBanners,
  TripleBanners,
} from "@/presentation/components/banner";

export type CartProps = {
  cart: {
    product: ProductType;
    qtd: number;
  }[];
};

export const Home = () => {
  const { cart, handleCartUpdate } = useContext(CartContext);

  const handlePurchase = (product: { item: ProductType; qtd: number }) => {
    const productInCart = cart.find(
      (p) => p.product.name === product.item.name
    );
    if (!!productInCart) {
      if (product.qtd === 0) {
        const updated = cart.filter(
          (item) => item.product.name !== product.item.name
        );
        handleCartUpdate!(updated);
        return;
      }

      const updated = cart.map((cartItem) => {
        if (cartItem.product.name === productInCart.product.name) {
          return {
            ...cartItem,
            product: { ...cartItem.product },
            qtd: product.qtd,
          };
        }
        return cartItem;
      });
      handleCartUpdate!(updated);
    } else {
      const data = [
        ...cart,
        {
          product: product.item,
          qtd: 1,
        },
      ];

      handleCartUpdate!(data);
    }
  };

  return (
    <>
      <Header />
      <Banner />
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
      <HalfBanners />
      <TripleBanners />
      <Row>
        <Col md={12}>
          <Row center="md">
            <Col xs={12} sm={12} md={10}>
              <ProductWrapper>
                {data
                  .reverse()
                  .slice(4)
                  .map((p) => (
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
