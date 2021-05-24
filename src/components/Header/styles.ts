import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  max-height: 64px;
  box-shadow: #00000033 0px 0px 5px;
  z-index: 1;
`;

const Content = styled.div`
  margin: 20px 24px;
  display: flex;
  img {
    height: 24px;
  }
`;

export { Container, Content };
