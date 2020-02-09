import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loading from 'components/Loading';

import { Container, Title, List, Playlist } from './styles';
// import albumImg from 'assets/images/album.jpg';

import { playlistsGetRequest } from 'store/modules/playlist/actions';

export default function Browser() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playlistsGetRequest());
  }, [dispatch]);

  const playlists = useSelector(state => state.playlist);

  return (
    <Container>
      <Title>
        Navegar
        {playlists.loading && <Loading />}
      </Title>
      <List>
        {playlists.data.map(({ id, title, description, thumbnail }) => (
          <Playlist to={`/playlists/${id}`}>
            <img src={thumbnail} alt="Playlist" draggable="false" />
            <strong>{title}</strong>
            <p>{description}</p>
          </Playlist>
        ))}
      </List>
    </Container>
  );
}
