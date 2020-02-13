import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sound from 'react-sound';
import Slider from 'rc-slider';

import {
  playerPauseSong,
  playerPlaySong,
  playerPrevSong,
  playerNextSong,
  playerPlayingSong,
  playerVolumeSong,
  playerMuteSong,
  playerLoopSong,
  playerHandlePositionSong,
  playerSetPositionSong,
} from 'store/modules/player/actions';

import {
  Container,
  Current,
  Playing,
  ButtonsControll,
  BarControll,
  ProgressSlider,
  ControlBar,
  Volume,
} from './styles';

import shuffleIcon from 'assets/svgs/shuffle.svg';
import backwardIcon from 'assets/svgs/backward.svg';
import pauseIcon from 'assets/svgs/pause.svg';
import playIcon from 'assets/svgs/play.svg';
import forwardIcon from 'assets/svgs/forward.svg';
import repeatIcon from 'assets/svgs/repeat.svg';
import queueIcon from 'assets/svgs/queue.svg';
import muteIcon from 'assets/svgs/mute.svg';
import volumeIcon from 'assets/svgs/volume.svg';
import volumeMinIcon from 'assets/svgs/volume-min.svg';
import volumeMaxIcon from 'assets/svgs/volume-max.svg';
import fullscreenIcon from 'assets/svgs/fullscreen.svg';

export default function Player() {
  const player = useSelector(state => state.player);
  const durationSong = useSelector(state => msToTime(state.player.duration));
  const positionSong = useSelector(state => msToTime(state.player.position));
  const positionShownSong = useSelector(state =>
    msToTime(state.player.positionShown)
  );
  const progressSong = useSelector(
    state =>
      parseInt(
        (state.player.positionShown || state.player.position) *
          (1000 / state.player.duration),
        10
      ) || 0
  );

  const dispatch = useDispatch();

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  function msToTime(duration) {
    if (!duration) return null;
    let seconds = parseInt((duration / 1000) % 60, 10);
    const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutes}:${seconds}`;
  }

  return (
    <Container>
      {player.currentSong && (
        <Sound
          url={player.currentSong.file}
          onFinishedPlaying={() => dispatch(playerNextSong())}
          playStatus={player.status}
          onPlaying={({ duration, position }) =>
            dispatch(playerPlayingSong({ duration, position }))
          }
          position={player.position}
          volume={player.volume}
          loop={player.loop}
        />
      )}

      <Current>
        {player.currentSong && (
          <>
            <img
              src={player.currentSong.thumbnail}
              alt={player.currentSong.album || 'Cover'}
              draggable="false"
            />

            <div>
              <span>{player.currentSong.title}</span>
              <small>{player.currentSong.album}</small>
            </div>
          </>
        )}
      </Current>

      <Playing>
        <ButtonsControll>
          <button type="button">
            <img src={shuffleIcon} alt="Shuffle" draggable="false" />
          </button>

          <button onClick={() => dispatch(playerPrevSong())} type="button">
            <img src={backwardIcon} alt="Backward" draggable="false" />
          </button>

          {player.currentSong && player.status === Sound.status.PLAYING ? (
            <button onClick={() => dispatch(playerPauseSong())} type="button">
              <img src={pauseIcon} alt="Pause" color="#fff" draggable="false" />
            </button>
          ) : (
            <button onClick={() => dispatch(playerPlaySong())} type="button">
              <img src={playIcon} alt="Play" color="#fff" draggable="false" />
            </button>
          )}

          <button onClick={() => dispatch(playerNextSong())} type="button">
            <img src={forwardIcon} alt="Forward" draggable="false" />
          </button>

          <button onClick={() => dispatch(playerLoopSong())} type="button">
            <img src={repeatIcon} alt="Repeat" draggable="false" />
          </button>
        </ButtonsControll>

        <BarControll>
          <small>{positionShownSong || positionSong}</small>

          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#20D760' }}
              handleStyle={{ border: 0 }}
              max={1000}
              onChange={value =>
                dispatch(playerHandlePositionSong(value / 1000))
              }
              onAfterChange={value =>
                dispatch(playerSetPositionSong(value / 1000))
              }
              value={progressSong}
            />
          </ProgressSlider>

          <small>{durationSong}</small>
        </BarControll>
      </Playing>

      <ControlBar>
        <button type="button">
          <img src={queueIcon} alt="Queue" draggable="false" />
        </button>

        <Volume iconHeight={player.volume}>
          <button onClick={() => dispatch(playerMuteSong())} type="button">
            {(player.volume >= 67 && (
              <img src={volumeMaxIcon} alt="Volume" draggable="false" />
            )) ||
              (player.volume >= 34 && (
                <img src={volumeIcon} alt="Volume" draggable="false" />
              )) ||
              (player.volume >= 1 ? (
                <img src={volumeMinIcon} alt="Volume" draggable="false" />
              ) : (
                <img src={muteIcon} alt="Volume" draggable="false" />
              ))}
          </button>

          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#fff' }}
            handleStyle={{ background: '#20D760', border: 0 }}
            value={player.volume}
            onChange={volume => dispatch(playerVolumeSong(volume))}
          />
        </Volume>

        <button type="button" onClick={toggleFullScreen}>
          <img src={fullscreenIcon} alt="FullScren" draggable="false" />
        </button>
      </ControlBar>
    </Container>
  );
}
