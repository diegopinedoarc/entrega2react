import React from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";

export const LayoutContainerStyled = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  position: relative;
`;

export const ContentContainerStyled = styled.div`
  height: calc(100vh - 50px);
  background: var(--gris);
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainerStyled>
      <NavBar></NavBar>
      <ContentContainerStyled> {children} </ContentContainerStyled>
    </LayoutContainerStyled>
  );
};

export default Layout;
