import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import ProfileList from '../../components/Profile/List';

import { Container, Content, Section, Title } from './styles';

interface IProfileParams {
  id: string;
}

interface IThumbnail {
  path: string;
  extension: string;
}

interface IProfileItem {
  id: number;
  title: string;
  thumbnail: IThumbnail;
}

interface IProfile {
  id: string;
  name: string;
  description: string;
  thumbnail: IThumbnail;
}

const Profile: React.FC = () => {
  const [character, setCharacter] = useState<IProfile | null>(null);
  const [characterEvents, setCharacterEvents] = useState<Array<IProfileItem>>(
    [],
  );
  const [characterComics, setCharacterComics] = useState<Array<IProfileItem>>(
    [],
  );
  const [characterSeries, setCharacterSeries] = useState<Array<IProfileItem>>(
    [],
  );
  const { params } = useRouteMatch<IProfileParams>();

  useEffect(() => {
    api.get(`characters/${params.id}`).then(response => {
      setCharacter(response?.data?.data?.results[0]);
    });
    api
      .get('events', {
        params: { characters: params.id },
      })
      .then(response => {
        setCharacterEvents(response?.data?.data?.results);
      });
    api
      .get('comics', {
        params: { characters: params.id },
      })
      .then(response => {
        setCharacterComics(response?.data?.data?.results);
      });
    api
      .get('series', {
        params: { characters: params.id },
      })
      .then(response => {
        setCharacterSeries(response?.data?.data?.results);
      });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {character && (
          <>
            <Section className="header">
              <div
                className="profile__image"
                style={{
                  backgroundImage: `linear-gradient(135deg, #121212c4  30%, #121212c4  90%),
                  url(${character.thumbnail.path}.${character.thumbnail.extension})`,
                }}
              />
              <div className="profile__name">{character.name}</div>
            </Section>
            <Section className="body">
              {character.description && (
                <div>
                  <Title>Descrição</Title>
                  <p className="profile__description">
                    {character.description}
                  </p>
                </div>
              )}
              {characterComics.length > 0 && (
                <div>
                  <Title>Quadrinhos</Title>
                  <ProfileList list={characterComics} />
                </div>
              )}
              {characterSeries.length > 0 && (
                <div>
                  <Title>Séries</Title>
                  <ProfileList list={characterSeries} />
                </div>
              )}
              {characterEvents.length > 0 && (
                <div>
                  <Title>Eventos</Title>
                  <ProfileList list={characterEvents} />
                </div>
              )}
            </Section>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Profile;
