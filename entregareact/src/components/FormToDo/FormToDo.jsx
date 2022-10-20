import React, { useState } from "react";
import styled from "styled-components";
import { BotonAgregar } from "../Botones/Botones";
import { InputText } from "../Inputs/Inputs";
export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 26rem;
  height: 14rem;
  border: solid 1px black;
  gap: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 8px 1px black;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const FormToDo = (props) => {
  const [task, setTask] = useState("");
  const { handleAddItem } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      task,
    });
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <h2>Tareas Random</h2>
        <InputText
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <BotonAgregar disabled={task ? "" : "disabled"}>Agregar</BotonAgregar>
      </FormContainer>
    </form>
  );
};

export default FormToDo;
