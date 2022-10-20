import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LinkItem from "../LinkItem/LinkItem";
import { NavLink } from "react-router-dom";

export const NavbarContainerStyled = styled.header`
  width: 100%;
  height: 50px;
  background: var(--verdeoscuro);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;
  position: sticky;
  z-index: 1;
  top: 0;
  box-shadow: 2px 2px 8px 1px var(--verdeclaro);
`;

export const NavbarStyled = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
export const LinkButtonStyled = styled(NavLink)`
  border: none;
  background: transparent;
  color: var(--gris);
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  font-size: 18px;
  user-select: none;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    border-style: solid;
    border-width: 2px;
    color: var(--verdemasclaro);
  }

  &.active {
    border-style: solid;
    border-width: 2px;
  }
`;

const NavBar = () => {
  return (
    <NavbarContainerStyled>
      <NavbarStyled>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="todo">ToDo</LinkItem>
        <LinkItem to="buscadorpoke">Pokes</LinkItem>
      </NavbarStyled>
    </NavbarContainerStyled>
  );
};

export default NavBar;
