import React from "react";
import styled from "styled-components";
import Hero from "../../components/Hero/Hero";
import { ToDoContainer } from "../../components/Container/Container";
const Home = () => {
  return (
    <ToDoContainer>
      <Hero></Hero>
    </ToDoContainer>
  );
};

export default Home;
