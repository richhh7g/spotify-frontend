import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from 'services/api';
import { playlistsGetSuccess } from './actions';

export function* getPlaylists() {
  const { data: playlistsData } = yield call(api.get, '/playlists');

  yield put(playlistsGetSuccess(playlistsData));
}

export default all([takeLatest('@playlist/GET_REQUEST', getPlaylists)]);
