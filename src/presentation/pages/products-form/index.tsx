import React from "react";
import { Col, Row } from "react-flexbox-grid";
import { Formik, Field, Form } from "formik";
import { FieldWrapper, StyledWrapper } from "./styled";

export const ProductsForm = () => {
  return (
    <Row>
      <Col sm={10}>
        <Row>
          <Col md={12}>
            <h1>Cadastro de produtos</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Formik
              initialValues={{
                name: "",
                price: 0,
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form>
                <StyledWrapper>
                  <Row>
                    <Col md={12}>
                      <FieldWrapper>
                        <label htmlFor="name"> Nome</label>
                        <Field
                          id="name"
                          name="name"
                          placeholder="Insira o nome do produto"
                        />
                      </FieldWrapper>
                    </Col>
                    <Col md={12}>
                      <FieldWrapper>
                        <label htmlFor="price"> Preço</label>
                        <Field
                          id="price"
                          name="price"
                          placeholder="Insira o preço do produto"
                        />
                      </FieldWrapper>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <button type="submit">Cadastrar</button>
                    </Col>
                  </Row>
                </StyledWrapper>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
