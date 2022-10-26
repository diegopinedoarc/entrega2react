import React from "react";
import styled from "styled-components";
import Type from "../Type/Type";
import CardImg from "../CardImg/CardImg";

export const CardContainer = styled.div`
  width: 28rem;
  height: 40rem;
  border: 1px solid black;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  margin: 0 auto;
  padding: 30px 25px;
  padding-bottom: 15px;
  border-radius: 50px;
  box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4);
  box-shadow: -10px -10px 20px #ffffff;
  color: red;
`;

export const CardTextContentContainerStyled = styled.div`
  text-align: center;

  & h2 {
    margin: 0;
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
  }

  & h3 {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-top: 3px;
  }
`;

export const CardTypeContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
  }
`;

const Card = (props) => {
  const { name, order, sprites, types } = props;
  return (
    <>
      <CardContainerStyled>
        <CardImg image={sprites?.other.home.front_default} alt={name} />

        <CardTextContentContainerStyled>
          <h2>{name}</h2>
          <h3>{order}</h3>
        </CardTextContentContainerStyled>
        <CardTypeContainerStyled>
          <p>Tipo: </p>
          {types?.map((type) => (
            <Type key={type.slot} typeName={type.type.name} />
          ))}
        </CardTypeContainerStyled>
      </CardContainerStyled>
    </>
  );
};

export default Card;
