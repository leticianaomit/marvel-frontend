import React, { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';

import {
  SearchInput,
  Card,
  List,
  Container,
  Content,
  StyledLink,
} from './styles';

interface IEventsItem {
  name: string;
  resourceURI: string;
}

interface IEvents {
  items: Array<IEventsItem>;
}

interface ISeriesItem {
  name: string;
  resourceURI: string;
}

interface ISeries {
  items: Array<ISeriesItem>;
}

interface IThumbnail {
  path: string;
  extension: string;
}

interface ICharacter {
  id: string;
  name: string;
  thumbnail: IThumbnail;
  series: ISeries;
  events: IEvents;
}

interface IParams {
  limit: number;
  offset: number;
  nameStartsWith?: string;
}

const Main: React.FC = () => {
  const [characters, setCharacters] = useState<Array<ICharacter>>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');

  const handleSearchChange = useCallback(e => {
    setCurrentPage(1);
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    setLoading(true);
    setCharacters([]);
    const params: IParams = {
      limit: 10,
      offset: currentPage * 10,
    };
    if (search) params.nameStartsWith = search;
    api
      .get('characters', {
        params,
      })
      .then(response => {
        const totalQuantity = response?.data?.data?.total || 0;
        setTotalPages(Math.floor(totalQuantity / 10));
        setCharacters(response?.data?.data.results);
      })
      .finally(() => setLoading(false));
  }, [currentPage, search]);

  return (
    <Container>
      <Header />
      <Content>
        <h1 className="content__title">Busca de personagens</h1>
        <h4 className="content__subtitle">Nome do personagem</h4>
        <SearchInput placeholder="Search" onChange={handleSearchChange} />

        <List>
          {(() => {
            if (loading)
              return (
                <div className="list__loading">
                  <Loader text="Buscando personagens" />
                </div>
              );

            if (!characters.length) {
              return (
                <div className="list__empty">
                  Nenhum personagem foi encontrado
                </div>
              );
            }

            return (
              <div className="list__legend">
                <div>Personagem</div>
                <div>Séries</div>
                <div>Eventos</div>
              </div>
            );
          })()}

          {characters.map(character => (
            <StyledLink key={character.id} to={`/profile/${character.id}`}>
              <Card className="card-character">
                <div className="card-character__profile">
                  <div className="card-character__avatar">
                    <img
                      alt="Avatar"
                      src={`${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`}
                      onError={e => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_medium.jpg';
                      }}
                    />
                  </div>
                  <div className="card-character__name">
                    <h4>{character.name}</h4>
                  </div>
                </div>
                <div className="card-character__series">
                  {character.series?.items?.slice(0, 3).map(serie => (
                    <p key={serie.resourceURI}>{serie.name}</p>
                  ))}
                </div>
                <div className="card-character__events">
                  {character.events?.items?.slice(0, 3).map(event => (
                    <p key={event.resourceURI}>{event.name}</p>
                  ))}
                </div>
              </Card>
            </StyledLink>
          ))}
        </List>
      </Content>
      <Footer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </Footer>
    </Container>
  );
};

export default Main;
