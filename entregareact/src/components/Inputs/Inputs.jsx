import React from "react";
import styled from "styled-components";

export const InputText = styled.input.attrs((props) => ({ type: "text" }))`
  width: 20rem;
  height: 2rem;
  border: none;
  border-radius: 0.4rem;
  outline: none;
  font-family: var(--fuente2);
  font-size: 1.2rem;
  box-shadow: 2px 2px 8px 1px var(--verdeclaro);
  text-align: center;
`;

const Inputs = () => {
  return <InputText></InputText>;
};

export default Inputs;
