import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    cursor: pointer;
    transition: background-color 0.3s;
    height: 32px;
    width: 40px;
    margin: 0px 4px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background-color: #e5e5e5;
    color: #555555;
    &.active {
      background-color: #167abc;
      border-color: #167abc;
      color: white;
    }
    &:hover:not(.active) {
      background-color: #66abd8;
      border-color: #66abd8;
      color: white;
    }
  }
  svg {
    cursor: pointer;
    color: #8e8e8e;
    margin: 6px;
  }
`;

export { Container, Content };
