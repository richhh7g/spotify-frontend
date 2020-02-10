import React, { useEffect, useState } from 'react';

import Loading from 'components/Loading';

import api from 'services/api';

import { Container, Header, SongList } from './styles';

import clockIcon from 'assets/svgs/clock.svg';
import plusIcon from 'assets/svgs/plus.svg';

export default function Playlist({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    async function loadPlaylistSongs() {
      setLoading(true);
      const playlistSongs = await api.get(`/playlists/${id}?_embed=songs`);

      setPlaylist(playlistSongs.data);
      setLoading(false);
    }

    loadPlaylistSongs();
  }, [id]);

  return loading ? (
    <Container loading>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Header>
        <img src={playlist.tumbnail} alt={playlist.title} draggable="false" />

        <div>
          <span>PLAYLIST</span>
          <h1>{playlist.title}</h1>
          <p>{playlist.songs && playlist.songs.length} musicas</p>

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
        {!playlist.songs ? (
          <tr>
            <td colSpan={5}>
              <h1>Você ainda não tem nenhuma musica</h1>
            </td>
          </tr>
        ) : (
          playlist.songs.map(song => (
            <tbody>
              <tr>
                <td>
                  <img src={plusIcon} alt="Add" draggable="false" />
                </td>
                <td>{song.title}</td>
                <td>{song.author}</td>
                <td>{song.album}</td>
                <td>03:21</td>
              </tr>
            </tbody>
          ))
        )}
      </SongList>
    </Container>
  );
}
