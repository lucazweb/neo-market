import React, { useEffect, useState } from "react";
import {
  ButtonWrapper,
  DiscountBox,
  ProductButton,
  ProductDescription,
  ProductPrice,
  RattingBox,
  StyledInput,
  StyledWrapper,
} from "./styled";
import { Product as ProductType } from "@/domain/models/products";

type ProductProps = {
  data: ProductType;
  handleQtd?: () => void;
  handlePurchase: (item: ProductType) => void;
};

export const Product = ({ data, handlePurchase, handleQtd }: ProductProps) => {
  const [productData, setProductData] = useState({
    image: "",
    qtd: 0,
  });

  useEffect(() => {
    (async () => {
      if (data.image) {
        const img = await import(`@/assets/${data.image}`);
        setProductData({
          ...productData,
          image: img.default,
        });
      }
    })();
  }, []);

  const handlePurchaseOnClick = () => {
    handlePurchase(data);

    setProductData({
      ...productData,
      qtd: productData.qtd + 1,
    });
  };

  return (
    <StyledWrapper>
      <DiscountBox>Aproveite o desconto de 5%</DiscountBox>
      {productData && <img src={productData.image} alt="playcontrol" />}

      <ProductDescription>
        <span>{data.name}</span>
        <RattingBox>stars</RattingBox>
        <ProductPrice>
          <strong>{data.price}</strong>
          <span>R$ 45,90</span>
        </ProductPrice>
        <ButtonWrapper style={{ justifyContent: "center" }}>
          <ProductButton onClick={handlePurchaseOnClick}>
            APROVEITE
          </ProductButton>
          {!!productData.qtd && (
            <StyledInput type="number" value={productData.qtd} />
          )}
        </ButtonWrapper>
      </ProductDescription>
    </StyledWrapper>
  );
};
