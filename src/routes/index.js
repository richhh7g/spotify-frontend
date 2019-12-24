import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Wrapper, Container, Content } from 'styles/components';

import Browse from 'pages/Browse';
import Playlist from 'pages/Playlist';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Player from 'components/Player';
import FriendActivity from 'components/FriendActivity';

export default function Routes() {
  return (
    <Switch>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Route path="/" exact component={Browse} />
            <Route path="/playlists/:id" component={Playlist} />
          </Content>
          <FriendActivity />
        </Container>
        <Player />
      </Wrapper>
    </Switch>
  );
}
