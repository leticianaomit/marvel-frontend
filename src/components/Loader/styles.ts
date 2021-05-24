import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  .loader__icon {
    &::after {
      content: ' ';
      display: block;
      width: 32px;
      height: 32px;
      margin: 8px;
      border-radius: 50%;
      border: 5px solid #167abc;
      border-color: #167abc transparent #167abc transparent;
      animation: loader__icon 1.2s linear infinite;
    }
  }
  span {
    color: #8e8e8e;
    margin-left: 4px;
  }
  @keyframes loader__icon {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Container, Content };
