import React from 'react';

import { Container, Title, List, Playlist } from './styles';

import albumImg from 'assets/images/album.jpg';

export default function Browser() {
  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        <Playlist to="/playlists/1">
          <img src={albumImg} alt="Playlist" draggable="false" />
          <strong>Melhores do rock</strong>
          <p>Ouça em quanto programa</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img src={albumImg} alt="Playlist" draggable="false" />
          <strong>Melhores do rock</strong>
          <p>Ouça em quanto programa</p>
        </Playlist>
        <Playlist to="/playlists/1">
          <img src={albumImg} alt="Playlist" draggable="false" />
          <strong>Melhores do rock</strong>
          <p>Ouça em quanto programa</p>
        </Playlist>
      </List>
    </Container>
  );
}
