import React from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import styled from "styled-components";

export const GlobalContenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
`;

const BuscadorPoke = () => {
  return (
    <>
      <GlobalContenedor>
        <Search></Search>
        <Card></Card>
      </GlobalContenedor>
    </>
  );
};

export default BuscadorPoke;
