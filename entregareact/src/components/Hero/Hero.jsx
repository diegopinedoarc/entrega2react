import React from "react";
import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 4rem;
  font-family: var(--fuente2);
  font-size: 2rem;
`;
const Hero = () => {
  return (
    <HeroContainer>
      <h2>Es el hero más random que vas a encontrar</h2>
      <h3>Me esta costando mucho React </h3>
      <img
        style={{ borderRadius: "0.5rem" }}
        src="https://c.tenor.com/mYsyDq3H3_EAAAAC/office-work.gif"
        alt="panda"
      />
    </HeroContainer>
  );
};

export default Hero;
