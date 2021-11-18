import React from 'react';

import { Container, Content } from './styles';
import logo from '../../assets/images/marvel-logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />
      </Content>
    </Container>
  );
};

export default Header;
