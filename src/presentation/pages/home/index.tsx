import React, { useEffect } from "react";
import { Header, Product } from "@/presentation/components";
import { Col, Row } from "react-flexbox-grid";
import { ProductWrapper } from "./styled";
import { data } from "@/assets/mock-data";

export const Home = () => {
  useEffect(() => {
    console.log(data);
  }, []);

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
                  <Product name={p.name} image={p.image} price={p.price} />
                ))}
              </ProductWrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
