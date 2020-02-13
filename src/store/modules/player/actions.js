export function playerLoadSong(song, list) {
  return {
    type: '@player/LOAD',
    payload: { song, list },
  };
}

export function playerPlaySong() {
  return {
    type: '@player/PLAY',
  };
}

export function playerPauseSong() {
  return {
    type: '@player/PAUSE',
  };
}

export function playerPrevSong() {
  return {
    type: '@player/PREV',
  };
}

export function playerNextSong() {
  return {
    type: '@player/NEXT',
  };
}

export function playerLoopSong() {
  return {
    type: '@player/LOOP',
  };
}

export function playerHandlePositionSong(percent) {
  return {
    type: '@player/HANDLE_POSITION',
    payload: { percent },
  };
}

export function playerSetPositionSong(percent) {
  return {
    type: '@player/SET_POSITION',
    payload: { percent },
  };
}

export function playerVolumeSong(volume) {
  return {
    type: '@player/SET_VOLUME',
    payload: { volume },
  };
}

export function playerMuteSong() {
  return {
    type: '@player/SET_MUTE',
  };
}

export function playerPlayingSong({ duration, position }) {
  return {
    type: '@player/PLAYING',
    payload: { duration, position },
  };
}
