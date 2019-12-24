import React from 'react';

import { Container, Search, User } from './styles';

import userImg from 'assets/images/perfil.png';

export default function Header() {
  return (
    <Container>
      <Search>
        <input placeholder="Buscar" />
      </Search>

      <User>
        <img src={userImg} alt="User" draggable="false" />
        Richhh
      </User>
    </Container>
  );
}
