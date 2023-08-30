import React, { useEffect } from "react";
import styled from "styled-components";
import HeartImg from "../../icon/Heart";
import Star from "../../icon/Star";

const Wrapper = styled.div`
  width: 280px;
  height: 600px;
  margin-top: 60px;
  margin-left: 130px;
  box-shadow: 1px 4px 8px 10px rgba(34, 60, 80, 0.2);
  border-radius: 15px;
`;
const ImageBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const StyledImage = styled.img`
  margin-top: 25px;
  width: 282px;
  height: 300px;
`;
const QuickViewButton = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px 7px;
  background-color: rgba(255, 255, 255, 0.8);
  top: 156px;
  left: auto;
  position: absolute;
  font-weight: 600;
  color: #30273a;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const Square = styled.div`
  position: absolute;
  bottom: -4px;
  left: 23px;
  z-index: 2;
  background-color: rgba(232, 229, 229, 0.5);
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SquareInSquare = styled.div`
  z-index: 3;
  background-color: #646c6f;
  border-radius: 1px;
  width: 10px;
  height: 10px;
`;
const Discount = styled.div`
  position: absolute;
  bottom: -10px;
  left: 20px;
  display: flex;
  justify-content: flex-start;
  color: #9a2e84;
  background-color: #fdeaf4;
  border-radius: 6px;
  z-index: 4;
  font-size: 12px;
  line-height: 14px;
  font-weight: 600;
  padding: 2px 5px;
`;
const TextBlock = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding-left: 16px;
  flex-direction: column;
`;
const Cost = styled.p`
  display: inline-block;
  padding: 0;
  margin-top: 30px;
  margin-bottom: 0;
  font-weight: 900;
  font-size: 16px;
  color: 5244ee;
`;
const OldCost = styled.span`
  text-decoration: line-through;
  color: #999290;
  font-size: 14px;
`;
const LowCost = styled.p`
  display: inline-block;
  padding: 0;
  margin-top: 7px;
  margin-bottom: 0;
  font-weight: 900;
  font-size: 14px;
  color: #ea6ad7;
`;
const Options = styled.p`
  display: inline-block;
  padding: 0;
  margin-top: 5px;
  margin-bottom: ;
  font-weight: 600;
  font-size: 12px;
  color: #babbbe;
`;
const CountReview = styled.p`
  color: #babbbe;
  font-size: 13px;
  margin: 0 0 0 8px;
`;

const CreditButton = styled.button`
  background: linear-gradient(45deg, #a1ffce, #fcf578);
  padding: 10px;
  border-radius: 15px;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 6px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(45deg, rgba(161, 255, 206, 50%), rgb(252, 245, 120, 50%));
  }
`;
const BasketButton = styled.button`
  background: rgb(202, 17, 172);
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  color: white;
  &:hover {
    cursor: pointer;
    background: rgba(202, 17, 172, 0.7);
  }
`;
const Shop = () => {
  return (
    <Wrapper>
      <ImageBlock>
        <StyledImage
          src="https://twigo.ru/center/iblock/bd2/28av1cz91usl28kth2in9v9prsc180b8/4-_1_.png"
          alt="Iphone"
        />
        <QuickViewButton>Быстрый просмотр</QuickViewButton>
        <Square>
          <SquareInSquare></SquareInSquare>
        </Square>
        <Discount>-14%</Discount>
      </ImageBlock>

      <TextBlock>
        <Cost>
          86 956 ₽ &nbsp;<OldCost> 99 990 ₽</OldCost>
        </Cost>
        <LowCost> 85 251 ₽</LowCost>
        <Options>Apple / Смартфон IPhone 12 Pro 128 GB / 6/1" / 2532x1170 / Oled / 128u /</Options>
        
        <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <CountReview>87</CountReview>
        </div>

        <CreditButton> Рассрочка 0-0-6</CreditButton>
        <div style={{ display: "flex", marginTop: "13px", alignItems: "center", gap: "16px" }}>
          <BasketButton> В корзину </BasketButton> <HeartImg></HeartImg>{" "}
        </div>
      </TextBlock>
    </Wrapper>
  );
};

export default Shop;
