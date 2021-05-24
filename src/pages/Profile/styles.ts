import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.main`
  margin: 64px auto 90px;
`;

const Section = styled.section`
  &.header {
    background-color: #f5f5f5;
    justify-content: center;
    height: 450px;
    -webkit-clip-path: polygon(0 0, 0 98%, 100% 89%, 100% 0);
    clip-path: polygon(0 0, 0 98%, 100% 89%, 100% 0);
    grid-template-columns: repeat(1, 1fr);
    display: grid;
    .profile__image {
      text-align: end;
      background-size: auto 100%;
      background-position: center;
      max-width: 100%;
      height: 100%;
    }
    .profile__name {
      position: absolute;
      font-weight: 900;
      font-size: 48px;
      text-transform: uppercase;
      text-align: center;
      color: white;
      width: 100%;
      top: 25%;
    }
  }

  &.body {
    max-width: 1140px;
    margin: 0px auto 90px;
    padding: 0px 24px;
    .profile__description {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  margin: 40px 10px 15px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 36px;
`;

export { Container, Content, Section, Title };
