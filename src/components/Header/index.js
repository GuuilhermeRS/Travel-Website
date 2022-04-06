import React from 'react';

import { Container } from './styles';
import Nav from './Nav';

function Header() {
  return (
    <Container>
      <img src="/logo.svg" alt="Website Logo" />
      <Nav />
    </Container>
  );
}

export default Header;