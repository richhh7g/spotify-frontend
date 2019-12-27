export function addPlaylist(music) {
  return {
    type: '@playlist/ADD_SUCCESS',
    music,
  };
}
