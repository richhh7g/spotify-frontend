import React from 'react';

import { Container, Header, SongList } from './styles';
import clockIcon from 'assets/svgs/clock.svg';
import plusIcon from 'assets/svgs/plus.svg';
import albumImg from 'assets/images/album.jpg';

export default function Playlist() {
  return (
    <Container>
      <Header>
        <img src={albumImg} alt="Playlist" draggable="false" />

        <div>
          <span>PLAYLIST</span>
          <h1>Lonely day</h1>
          <p>13 musicas</p>

          <button>PLAY</button>
        </div>
      </Header>
      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Titulo</th>
          <th>Artista</th>
          <th>Álbum</th>
          <th>
            <img src={clockIcon} alt="Duration" draggable="false" />
          </th>
        </thead>

        <tbody>
          <tr>
            <td>
              <img src={plusIcon} alt="Add" draggable="false" />
            </td>
            <td>Lonely day</td>
            <td>System of a Down</td>
            <td>Toxity</td>
            <td>03:21</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
}
