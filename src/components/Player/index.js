import React from 'react';
import Slider from 'rc-slider';

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

import img from 'assets/images/album.jpg';
import shuffleIcon from 'assets/svgs/shuffle.svg';
import backwardIcon from 'assets/svgs/backward.svg';
import pauseIcon from 'assets/svgs/pause.svg';
import forwardIcon from 'assets/svgs/forward.svg';
import repeatIcon from 'assets/svgs/repeat.svg';
import queueIcon from 'assets/svgs/queue.svg';
import volumeIcon from 'assets/svgs/volume.svg';
import fullscreenIcon from 'assets/svgs/fullscreen.svg';

export default function Player() {
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  // function novaJanela(URL) {
  //   window.open(
  //     URL,
  //     '_blank',
  //     'height=100, width=100, top=100, left=100, alwaysOnTop=yes, dialog=yes, minimizable=no,close=0, titlebar=no, scrollbars=no, status=no, resizable=no'
  //   );
  // }

  return (
    <Container>
      <Current>
        <img src={img} alt="Cover" draggable="false" />

        <div>
          <span>Scar tissue</span>
          <small>Californication</small>
        </div>
      </Current>

      <Playing>
        <ButtonsControll>
          <button type="button">
            <img src={shuffleIcon} alt="Shuffle" draggable="false" />
          </button>

          <button type="button">
            <img src={backwardIcon} alt="Backward" draggable="false" />
          </button>

          <button type="button">
            <img src={pauseIcon} alt="Pause" color="#fff" draggable="false" />
          </button>

          <button type="button">
            <img src={forwardIcon} alt="Forward" draggable="false" />
          </button>

          <button type="button">
            <img src={repeatIcon} alt="Repeat" draggable="false" />
          </button>
        </ButtonsControll>

        <BarControll>
          <small>00:00</small>

          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#20D760' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>

          <small>03:30</small>
        </BarControll>
      </Playing>

      <ControlBar>
        <button type="button">
          <img src={queueIcon} alt="Queue" draggable="false" />
        </button>

        <Volume>
          <img src={volumeIcon} alt="Volume" draggable="false" />
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#fff' }}
            handleStyle={{
              background: '#20D760',
              border: 0,
            }}
          />
        </Volume>

        <button type="button" onClick={toggleFullScreen}>
          <img src={fullscreenIcon} alt="FullScren" draggable="false" />
        </button>
      </ControlBar>
    </Container>
  );
}
