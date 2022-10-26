import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Search from "../../components/Search/Search";
import styled from "styled-components";
import axios from "axios";

export const GlobalContenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
`;

const BuscadorPoke = () => {
  // Con estos 3 estados vamos a manejar toda la app
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Crear un handler para cuando busquemos algo en el form
  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      let selectedPokemon = pokemon.toLowerCase().trim();

      // declaramos la data
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      );
      setData(data);
    } catch (error) {
      setError("Pokemon no encontrado, busca bien broderr");
    }

    setIsLoading(false);
  };

  return (
    <>
      <GlobalContenedor>
        <Search handleSubmit={handleSubmit}></Search>
        {data && <Card {...data} />}
      </GlobalContenedor>
    </>
  );
};

export default BuscadorPoke;
