import React from "react";

import { POKEMON_TYPE_COLORS } from "../data/colors";
import styled from "styled-components";

export const TypeStyled = styled.div`
  padding: 5px 10px;
  background-color: ${({ type }) => POKEMON_TYPE_COLORS[type]};
  border-radius: 15px;
`;

// Al componente le llegan props
const Type = ({ typeName }) => {
  return <TypeStyled type={typeName}>{typeName}</TypeStyled>;
};

export default Type;
