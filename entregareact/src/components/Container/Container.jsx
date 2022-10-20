import React, { useState } from "react";
import FormToDo from "../FormToDo/FormToDo";
import TaskList from "../TaskList/TaskList";
import styled from "styled-components";
export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 0.5rem;
`;
const Container = () => {
  const [list, setList] = useState([]);
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <ToDoContainer>
      <FormToDo handleAddItem={handleAddItem}></FormToDo>
      <TaskList list={list} setList={setList}></TaskList>
    </ToDoContainer>
  );
};

export default Container;
