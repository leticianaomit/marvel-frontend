import React from 'react';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img
          src="https://www.objective.com.br/wp-content/uploads/2020/11/logo.svg"
          alt="Logo"
        />
      </Content>
    </Container>
  );
};

export default Header;
