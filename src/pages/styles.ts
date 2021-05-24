import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Content = styled.main`
  max-width: 1140px;
  margin: 64px auto 90px;
  padding: 24px;
  .content__title {
    margin: 16px auto;
  }
  .content__subtitle {
    margin-top: 0px;
    margin-bottom: 8px;
  }
`;

const SearchInput = styled.input`
  transition: 0.3s;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  height: 32px;
  min-width: 295px;
  padding: 0 16px;
  font-style: italic;
  &:focus-visible {
    outline: 0px;
    box-shadow: #00000033 0px 0px 5px;
  }
`;

const Card = styled.div`
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  margin-top: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: #00000033 0px 0px 5px;
  padding: 20px 12px;
  transition: 0.3s;
  &:hover {
    box-shadow: #00000033 0px 0px 4px 4px;
  }
  .card-character__profile {
    display: flex;
    flex: 1;
    .card-character__avatar {
      line-height: 48px;
      max-height: 48px;
      max-width: 48px;
      img {
        height: 48px;
        width: 48px;
        border-radius: 4px;
      }
    }
    .card-character__name {
      margin-left: 24px;
      font-weight: 500;
      h4 {
        margin: 0;
        line-height: 48px;
      }
    }
  }
  .card-character__events,
  .card-character__series {
    p {
      font-size: 14px;
      margin: 0;
    }
  }
  & > div {
    padding-left: 12px;
    padding-right: 12px;
  }
  @media only screen and (max-width: 640px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      > div:not(:first-child) {
        display: none;
      }
    }
  }
`;

const List = styled.div`
  margin-top: 30px;
  .list__empty,
  .list__loading {
    display: flex;
    justify-content: center;
  }
  .list__empty {
    color: #8e8e8e;
  }
  .list__legend {
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    padding: 0px 12px;
    font-size: 12px;
    color: #8e8e8e;
    > div {
      padding-left: 12px;
      padding-right: 12px;
    }
    @media only screen and (max-width: 640px) {
      & {
        grid-template-columns: repeat(1, 1fr);
        > div:not(:first-child) {
          display: none;
        }
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #555555;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export { Container, Content, SearchInput, Card, List, StyledLink };
