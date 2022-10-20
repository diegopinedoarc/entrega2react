import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Card from "../Card/Card";

export const SearchContainerGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 4rem;
  height: auto;
`;
export const SearchInput = styled.input.attrs((props) => ({ type: "text" }))`
  width: 20rem;
  height: 2rem;
  border: none;
  border-radius: 0.4rem;
  outline: none;
  font-family: var(--fuente2);
  box-shadow: 2px 2px 8px 1px var(--verdeclaro);
  text-align: center;
  margin-top: 1rem;
`;
export const SearchButton = styled.button`
  width: 12rem;
  height: 2rem;
  border: none;
  border-radius: 0.4rem;
  background: var(--verdeoscuro);
  color: wheat;
  box-shadow: 2px 2px 8px 1px black;
  font-weight: bold;
`;
const Search = ({ handleSubmit }) => {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  return (
    <SearchFormStyled
      onSubmit={(e) => {
        // handleSubmit(e, pokemon);
        dispatch(fetchPokemon(e, pokemon));
        setPokemon("");
      }}
    >
      <InputStyled
        placeholder="Search"
        value={pokemon}
        onChange={(e) => setPokemon(e.target.value)}
      />

      <ButtonStyled type="submit">
        <ImSearch size="20" color="#c1c0c9" />
      </ButtonStyled>
    </SearchFormStyled>
  );
};

export default Search;
