import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@playlist/GET_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@playlist/GET_SUCCESS':
      return produce(state, draft => {
        draft.data = action.payload.playlistsData;
        draft.loading = false;
      });
    default:
      return state;
  }
}
