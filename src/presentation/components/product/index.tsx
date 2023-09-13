import React, { useEffect, useState } from "react";
import {
  ButtonWrapper,
  DiscountBox,
  ProductButton,
  ProductDescription,
  ProductPrice,
  RattingBox,
  StyledInput,
  StyledInputWrapper,
  StyledWrapper,
} from "./styled";
import { Product as ProductType } from "@/domain/models/products";
import { handleLocalDataParse } from "@/main/App";
import { Cart } from "@/main/context";

type ProductProps = {
  data: ProductType;
  handleQtd?: () => void;
  handlePurchase: (product: { item: ProductType; qtd: number }) => void;
};

export const Product = ({ data, handlePurchase, handleQtd }: ProductProps) => {
  const [productData, setProductData] = useState({
    image: "",
    qtd: 0,
  });

  useEffect(() => {
    (async () => {
      const cart: Cart | undefined = handleLocalDataParse();
      const saved = cart?.find((item) => item.product.name === data.name);

      if (data.image) {
        const img = await import(`@/assets/${data.image}`);
        setProductData({
          ...productData,
          image: img.default,
          qtd: saved?.qtd ? saved.qtd : 0,
        });
      }
    })();
  }, []);

  useEffect(() => {
    const cart: Cart | null = handleLocalDataParse();
    if (cart) {
      const saved = cart.find((item) => item.product.name === data.name);
      if (saved?.qtd) {
        setProductData({
          ...productData,
          qtd: saved.qtd,
        });
      }
    }
  }, []);

  const handlePurchaseProduct = () => {
    handlePurchase({ item: data, qtd: productData.qtd });

    setProductData({
      ...productData,
      qtd: productData.qtd === 0 ? 1 : productData.qtd,
    });
  };

  const handleAddProduct = () => {
    setProductData({
      ...productData,
      qtd: productData.qtd + 1,
    });
    handlePurchase({ item: data, qtd: productData.qtd + 1 });
  };

  const handleRemoveProduct = () => {
    if (productData.qtd > 0) {
      setProductData({
        ...productData,
        qtd: productData.qtd - 1,
      });
    }
    handlePurchase({ item: data, qtd: productData.qtd - 1 });
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
          <ProductButton onClick={handlePurchaseProduct}>
            APROVEITE
          </ProductButton>
          {!!productData.qtd && (
            <StyledInputWrapper>
              <button onClick={handleRemoveProduct}>-</button>
              <StyledInput type="number" value={productData.qtd} />
              <button onClick={handleAddProduct}>+</button>
            </StyledInputWrapper>
          )}
        </ButtonWrapper>
      </ProductDescription>
    </StyledWrapper>
  );
};
