import React from 'react';

import { Container, Content } from './styles';

interface ILoader {
  text: string;
}

const Loader: React.FC<ILoader> = ({ text }) => {
  return (
    <Container>
      <Content>
        <div className="loader__icon" />
        <span>{text}</span>
      </Content>
    </Container>
  );
};

export default Loader;
