import React from "react";
import { ItemList, StyledMenuList, StyledMenuRow } from "./styled";
import { Col } from "react-flexbox-grid";

export const HeaderMenu = () => {
  return (
    <StyledMenuRow center="md">
      <Col md={10}>
        <StyledMenuList>
          <ItemList>Todas as Categorias</ItemList>
          <ItemList>celulares e smartphones</ItemList>
          <ItemList>informática</ItemList>
          <ItemList>tv e vídeo</ItemList>
          <ItemList>eletrodomésticos</ItemList>
          <ItemList>eletroportáteis</ItemList>
          <ItemList>móveis</ItemList>
          <ItemList>beleza e perfumaria</ItemList>
        </StyledMenuList>
      </Col>
    </StyledMenuRow>
  );
};
