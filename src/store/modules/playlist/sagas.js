import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import { playlistsGetSuccess } from './actions';

export function* getPlaylists() {
  try {
    const { data: playlistsData } = yield call(api.get, '/playlists');

    yield put(playlistsGetSuccess(playlistsData));
  } catch (err) {
    if (err.message === 'Network Error') {
      return toast.error('Sem conexão com a internet');
    }
    return toast.error('Ops! algo deu errado');
  }
}

export default all([takeLatest('@playlist/GET_REQUEST', getPlaylists)]);
