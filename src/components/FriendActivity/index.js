import React from 'react';

import { Container, FriendList, FriendCard } from './styles';

import userImg from 'assets/images/perfil.png';
import songIcon from 'assets/svgs/song.svg';
import albumIcon from 'assets/svgs/album.svg';
import volumeIcon from 'assets/svgs/volume.svg';

export default function FriendActivity() {
  return (
    <Container>
      <div>
        <span>Atividade de amigos</span>
      </div>
      <FriendList>
        <FriendCard>
          <img src={userImg} alt="User" draggable="false" />
          <div className="details">
            <h1>User 1</h1>
            <span>Álbum</span>
            <span>Artist</span>
            <div>
              <img src={albumIcon} alt="Album" draggable="false" />
              <h1>Music Name</h1>
            </div>
          </div>
          <div>
            <img
              src={volumeIcon}
              className="icon-volume"
              alt="Volume"
              draggable="false"
            />
          </div>
        </FriendCard>
        <FriendCard>
          <img src={userImg} alt="User" draggable="false" />
          <div className="details">
            <h1>User 2</h1>
            <span>Álbum</span>
            <span>Artist</span>
            <div>
              <img src={songIcon} alt="Album" draggable="false" />
              <h1>Music Name</h1>
            </div>
          </div>
          <div>
            <small>3 h</small>
          </div>
        </FriendCard>

        <button type="button">Encontrar amigos</button>
      </FriendList>
    </Container>
  );
}
