import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

function ItemListContainer({ saludo }) {
  return (
    <Container>
      <p>{saludo}</p>
    </Container>
  );
}

export default ItemListContainer;