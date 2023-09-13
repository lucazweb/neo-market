import React, { useEffect, useState, useContext } from "react";
import { Header, Product } from "@/presentation/components";
import { Col, Row } from "react-flexbox-grid";
import {
  Footer,
  FooterList,
  ProductWrapper,
  StyledNewsButton,
  StyledNewsInput,
  Title,
} from "./styled";
import { data, secondaryProducts } from "@/assets/mock-data";
import { Product as ProductType } from "@/domain/models/products";
import { CartContext } from "@/main/context";
import {
  Banner,
  HalfBanners,
  TripleBanners,
} from "@/presentation/components/banner";

import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";

import lets from "@/assets/letss.png";
import { BiMailSend } from "react-icons/bi";

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
          <Title style={{ textAlign: "center" }}>
            Mega <span>Ofertas</span>
          </Title>
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
                {secondaryProducts.map((p) => (
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
      <Row center="md">
        <Col md={12} style={{ display: "flex", justifyContent: "center" }}>
          <BiMailSend size={85} />
        </Col>
        <Col md={12}>
          <h4>CADASTRE-SE</h4>
          <p>
            e fique por dentro das novidades e <strong>promoções</strong>
          </p>
        </Col>
        <Col md={12}>
          <StyledNewsInput type="text" placeholder="email@exemplo.com.br" />
          <StyledNewsButton>CADASTRAR</StyledNewsButton>
        </Col>
      </Row>
      <Row center="md">
        <Col md={10}>
          <Footer>
            <Row center="md">
              <Col md={3}>
                <FooterList>
                  <strong>INSTITUCIONAL</strong>
                  <li>Quem somos</li>
                  <li>Missão e visão</li>
                  <li>Valores</li>
                </FooterList>
              </Col>
              <Col md={3}>
                <FooterList>
                  <strong>ATENDIMENTO</strong>
                  <li>Entregas</li>
                  <li>Trocas e Devoluções</li>
                  <li>Fale Conosco</li>
                  <li>Dúvidas Frequentes</li>
                </FooterList>
              </Col>
              <Col md={3}>
                <FooterList>
                  <strong>ÁREA DO CLIENTE</strong>
                  <li>Minha Conta</li>
                  <li>Meus Pedidos</li>
                </FooterList>
              </Col>

              <Col md={3}>
                <FooterList>
                  <strong>CONFIE</strong>
                  <img src={lets} width="150" alt="lets encrypt" />
                </FooterList>
              </Col>
            </Row>
          </Footer>
        </Col>
      </Row>
      <Row center="md">
        <Col sm={12} md={6}>
          <Row
            center="md"
            style={{
              borderTop: "1px solid #ccc",
              paddingTop: "12px",
              marginTop: "32px",
            }}
          >
            <Col md={1}>
              <FaInstagram size={25} />
            </Col>
            <Col md={1}>
              <FaFacebook size={25} />
            </Col>
            <Col md={1}>
              <FaYoutube size={25} />
            </Col>
            <Col md={1}>
              <FaPinterest size={25} />
            </Col>
            <Col md={1}>
              <FaLinkedin size={25} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
