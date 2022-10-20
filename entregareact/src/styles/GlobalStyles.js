import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--fuente2);

  }
  :root {
    /* colores */
    --gris: #483838;
    --verdeoscuro: #42855B;
    --verdeclaro: #90B77D;
    --verdemasclaro: #D2D79F;
    --fuente1: 'Lato', sans-serif;
    --fuente2: 'Rajdhani', sans-serif;

 
  }
  body {
    background-color:#483838;
    width: 100%;
    height: auto;
    color: wheat;
  }
`;
