import React from "react";
import CheckBox from "../Inputs/CheckBox";
import styled from "styled-components";
import { BotonAgregar } from "../Botones/Botones";
export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 26rem;
  height: auto;
  border: solid 1px black;
  gap: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 8px 1px black;
  margin-bottom: 1rem;
  font-family: "Lato", sans-serif;
`;

const TaskList = (props) => {
  const { list, setList } = props;
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const chk = list.map((item) => (
    <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
  ));

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };
  return (
    <ListContainer>
      {list.length ? chk : "Sin tareas"}
      {list.length ? (
        <p>
          <BotonAgregar onClick={onClickRemoveItem}>
            Borrar terminadas
          </BotonAgregar>
        </p>
      ) : null}
    </ListContainer>
  );
};

export default TaskList;
