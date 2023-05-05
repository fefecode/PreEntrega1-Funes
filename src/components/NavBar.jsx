import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 80px;
  padding: 0 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  img {
    height: 50px;
  }
`;

const Categorias = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 20px;
  }

  a {
    color: #333;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
      color: #666;
    }
  }
`;

const Carrito = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #333;
`;

function Navbar() {
  return (
    <Nav>
      <Logo>
        <img src="https://placehold.jp/150x150.png" /> Feferoni's Pizza
      </Logo>
      <Categorias>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Más</a></li>
      </Categorias>
      <Carrito>
        <span>Carrito ({0})</span>
      </Carrito>
    </Nav>
  );
}

export default Navbar;