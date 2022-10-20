import React from "react";
import { LinkButtonStyled } from "../NavBar/NavBar";

const LinkItem = (props) => {
  return <LinkButtonStyled to={props.to}> {props.children} </LinkButtonStyled>;
};

export default LinkItem;
