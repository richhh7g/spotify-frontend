import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../Loading';

import { playlistsGetRequest } from 'store/modules/playlist/actions';

import { Container, NewPlaylist, Nav } from './styles';

import addPlaylist from 'assets/svgs/add-playlist.svg';

export default function Sidebar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playlistsGetRequest());
  }, [dispatch]);

  const playlists = useSelector(state => state.playlist);

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
            {playlists.loading && <Loading />}
          </li>
          {playlists.data.map(playlist => (
            <li key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
            </li>
          ))}
        </Nav>
      </div>
      <NewPlaylist>
        <img src={addPlaylist} alt="Adicionar Playlist" />
        Nova playlist
      </NewPlaylist>
    </Container>
  );
}
