import React, { useState } from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import handleSubmit from "../../components/Fetch/Fetch";
export const SearchContainerGlobal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 4rem;
  height: auto;
`;
export const SearchFormStyled = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 5rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  box-shadow: 10px 10px 25px rgba(174, 174, 192, 0.4);
  box-shadow: -10px -10px 20px #ffffff;
`;
export const SearchInput = styled.input.attrs((props) => ({ type: "text" }))`
  width: 12rem;
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
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background: var(--verdeoscuro);
  color: wheat;
  box-shadow: 2px 2px 8px 1px black;
  font-weight: bold;
`;
const Search = ({ handleSubmit }) => {
  const [pokemon, setPokemon] = useState("");

  return (
    <SearchContainerGlobal>
      <SearchFormStyled
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e, pokemon);
          setPokemon("");
        }}
      >
        <SearchInput
          placeholder="Search"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />

        <SearchButton type="submit">
          <ImSearch size="15" color="#c1c0c9" />
        </SearchButton>
      </SearchFormStyled>
    </SearchContainerGlobal>
  );
};

export default Search;
