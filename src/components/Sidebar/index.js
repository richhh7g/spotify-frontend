import React from 'react';
import { Link } from 'react-router-dom';

import { Container, NewPlaylist, Nav } from './styles';

import addPlaylist from 'assets/svgs/add-playlist.svg';

export default function Sidebar() {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <Link to="/">Navegar</Link>
          </li>
          <li>
            <Link to="/">Radio</Link>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>SUA BIBLIOTECA</span>
          </li>
          <li>
            <Link to="/">Seu Daily Mix</Link>
          </li>
          <li>
            <Link to="/">Tocados recentemente</Link>
          </li>
          <li>
            <Link to="/">Musicas</Link>
          </li>
          <li>
            <Link to="/">Álbums</Link>
          </li>
          <li>
            <Link to="/">Artistas</Link>
          </li>
          <li>
            <Link to="/">Podcasts</Link>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>Playlist</span>
          </li>
          <li>
            <Link to="/playlists/1">Diversos</Link>
          </li>
        </Nav>
      </div>
      <NewPlaylist>
        <img src={addPlaylist} alt="Adicionar Playlist" />
        Nova playlist
      </NewPlaylist>
    </Container>
  );
}
