import React from 'react';

import { Container, Content, Card } from './styles';

interface IThumbnail {
  path: string;
  extension: string;
}

interface IItem {
  id: number;
  title: string;
  thumbnail: IThumbnail | null;
}

interface IProfileList {
  list: Array<IItem>;
}

const ProfileList: React.FC<IProfileList> = ({ list }) => {
  return (
    <Container>
      <Content>
        {list.length > 0 &&
          list.map(item => (
            <Card key={item.id}>
              {item.thumbnail && (
                <img
                  alt="Avatar"
                  src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg';
                  }}
                />
              )}
              <h5>{item.title}</h5>
            </Card>
          ))}
      </Content>
    </Container>
  );
};

export default ProfileList;
