export function playlistsGetRequest() {
  return {
    type: '@playlist/GET_REQUEST',
  };
}

export function playlistsGetSuccess(playlistsData) {
  return {
    type: '@playlist/GET_SUCCESS',
    payload: { playlistsData },
  };
}
