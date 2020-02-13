import produce from 'immer';
import Sound from 'react-sound';

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  positionShown: null,
  duration: null,
  loop: false,
  mute: true,
  volume: 100,
  oldVolume: null,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@player/LOAD':
      return produce(state, draft => {
        draft.currentSong = action.payload.song;
        draft.list = action.payload.list;
        draft.status = Sound.status.PLAYING;
        draft.position = 0;
      });
    case '@player/PLAY':
      return produce(state, draft => {
        draft.status = Sound.status.PLAYING;
      });
    case '@player/PAUSE':
      return produce(state, draft => {
        draft.status = Sound.status.PAUSED;
      });
    case '@player/PREV':
      return produce(state, draft => {
        const currentIndex = state.list.findIndex(
          song => song.id === state.currentSong.id
        );

        const prev = state.list[currentIndex - 1];

        draft.position = 0;

        if (prev) {
          draft.currentSong = prev;
          draft.status = Sound.status.PLAYING;
        }
      });
    case '@player/NEXT':
      return produce(state, draft => {
        const currentIndex = state.list.findIndex(
          song => song.id === state.currentSong.id
        );

        const next = state.list[currentIndex + 1];

        draft.position = 0;

        if (next) {
          draft.currentSong = next;
          draft.status = Sound.status.PLAYING;
        }

        if (!next) {
          draft.currentSong = state.list[0];
          draft.status = Sound.status.PAUSED;
        }
      });
    case '@player/LOOP':
      return produce(state, draft => {
        draft.loop = true;

        if (state.loop === true) {
          draft.loop = false;
        }
      });
    case '@player/HANDLE_POSITION':
      return produce(state, draft => {
        draft.positionShown = state.duration * action.payload.percent;
      });
    case '@player/SET_POSITION':
      return produce(state, draft => {
        draft.position = state.duration * action.payload.percent;
        draft.positionShown = null;
      });
    case '@player/SET_VOLUME':
      return produce(state, draft => {
        draft.volume = action.payload.volume;
      });
    case '@player/SET_MUTE':
      return produce(state, draft => {
        draft.oldVolume = state.volume;

        if (state.mute === true) {
          draft.volume = 0;
          draft.mute = false;
        }

        if (state.mute === false) {
          draft.volume = state.oldVolume;
        }
      });
    case '@player/PLAYING':
      return produce(state, draft => {
        draft.position = action.payload.position;
        draft.duration = action.payload.duration;
      });
    default:
      return state;
  }
}
