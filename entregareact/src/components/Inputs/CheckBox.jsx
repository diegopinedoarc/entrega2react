import React, { Fragment } from "react";
import styled from "styled-components";

export const Check = styled.input.attrs((props) => ({ type: "checkbox" }))``;
export const Etiqueta = styled.label`
  display: flex;
  gap: 1rem;
  background-color: transparent;
  border-bottom: 1px solid black;
  padding: 0.5rem;
  min-width: 20rem;
  font-family: "Lato", sans-serif;
  box-shadow: 2px 2px 8px 1px var(--verdeclaro);
  border-radius: 0.2rem;
`;
const CheckBox = (props) => {
  const {
    onChange,
    data: { id, task, done },
  } = props;
  return (
    <Fragment>
      <Etiqueta htmlFor={id}>
        <Check name={id} defaultChecked={done} onChange={onChange} />
        <div className="todo__text">{task}</div>
      </Etiqueta>
    </Fragment>
  );
};

export default CheckBox;
