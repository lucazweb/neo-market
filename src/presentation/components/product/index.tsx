import React, { useEffect, useState } from "react";
import {
  DiscountBox,
  ProductButton,
  ProductDescription,
  ProductPrice,
  RattingBox,
  StyledWrapper,
} from "./styled";

type ProductProps = {
  name: string;
  image: string;
  price: number;
};

export const Product = (props: ProductProps) => {
  const [productImg, setProductImg] = useState();

  useEffect(() => {
    (async () => {
      if (props.image) {
        const image = await import(`@/assets/${props.image}`);
        setProductImg(image.default);
      }
    })();
  }, []);

  return (
    <StyledWrapper>
      <DiscountBox>Aproveite o desconto de 5%</DiscountBox>
      {productImg && <img src={productImg} alt="playcontrol" />}

      <ProductDescription>
        <span>{props.name}</span>
        <RattingBox>stars</RattingBox>
        <ProductPrice>
          <strong>{props.price}</strong>
          <span>R$ 45,90</span>
        </ProductPrice>
        <ProductButton>APROVEITE</ProductButton>
      </ProductDescription>
    </StyledWrapper>
  );
};
