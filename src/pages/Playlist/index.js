import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { playerLoadSong } from 'store/modules/player/actions';

import Loading from 'components/Loading';

import api from 'services/api';

import { Container, Header, SongList, SongItem } from './styles';

import clockIcon from 'assets/svgs/clock.svg';
import plusIcon from 'assets/svgs/plus.svg';

export default function Playlist({ match }) {
  const { id } = match.params;

  const player = useSelector(state => state.player);

  const [loading, setLoading] = useState(false);
  const [playlist, setPlaylist] = useState({});
  const [selectedSong, setSelectedSong] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPlaylistSongs() {
      try {
        setLoading(true);
        const playlistSongs = await api.get(`/playlists/${id}?_embed=songs`);

        setPlaylist(playlistSongs.data);
        setLoading(false);
      } catch (err) {
        if (err.message === 'Network Error') {
          return toast.error('Sem conexão com a internet');
        }
        return toast.error('Ops! algo deu errado');
      }
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

          <button
            onClick={() =>
              dispatch(playerLoadSong(playlist.songs[0], playlist.songs))
            }
          >
            PLAY
          </button>
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
          {!playlist.songs ? (
            <SongItem>
              <td colSpan={5}>Você ainda não tem nenhuma musica</td>
            </SongItem>
          ) : (
            playlist.songs.map(song => (
              <SongItem
                selected={song.id === selectedSong}
                playing={
                  player.currentSong && player.currentSong.id === song.id
                }
                onClick={() => setSelectedSong(song.id)}
                onDoubleClick={() =>
                  dispatch(playerLoadSong(song, playlist.songs))
                }
              >
                <td>
                  <img src={plusIcon} alt="Add" draggable="false" />
                </td>
                <td>{song.title}</td>
                <td>{song.author}</td>
                <td>{song.album}</td>
                <td>03:21</td>
              </SongItem>
            ))
          )}
        </tbody>
      </SongList>
    </Container>
  );
}
