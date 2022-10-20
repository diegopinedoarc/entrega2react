import React from "react";

import styled from "styled-components";

export const BotonAgregar = styled.button`
  width: 12rem;
  height: 2rem;
  border: none;
  border-radius: 0.4rem;
  background: var(--verdeoscuro);
  color: wheat;
  box-shadow: 2px 2px 8px 1px black;
  font-weight: bold;
`;
const Botones = () => {
  return <BotonAgregar>Agregar</BotonAgregar>;
};

export default Botones;
