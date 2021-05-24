import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.div`
  grid-template-columns: repeat(5, 1fr);
  display: grid;
  @media only screen and (max-width: 640px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 480px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Card = styled.div`
  margin-top: 10px;
  border-radius: 4px;
  transition: 0.3s;
  margin: 10px;
  text-align: center;
  img {
    max-width: 100%;
    box-shadow: 0 26px 24px -16px rgb(0 0 0 / 40%);
  }
  h5 {
    text-align: left;
  }
`;

export { Container, Content, Card };
