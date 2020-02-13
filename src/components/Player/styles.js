import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #282828;

  padding: 12px;
`;

export const Current = styled.div`
  width: 220px;

  display: flex;
  align-items: center;

  img {
    height: 48px;
    width: 48px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    span {
      color: #fff;
      font-size: 13px;
    }

    small {
      color: #b3b3b3;
      font-size: 11px;
    }
  }
`;

export const Playing = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonsControll = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  button {
    padding: 0 20px;

    border: none;
    background: inherit;
  }
`;

export const BarControll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  small {
    width: 30px;
    margin: 0 15px;
    letter-spacing: 0.5;
  }
`;

export const ProgressSlider = styled.div`
  width: 420px;
  user-select: none;
`;

export const ControlBar = styled.div`
  width: 200px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  button {
    background: inherit;
    border: none;
  }
`;

export const Volume = styled.div`
  width: 100px;

  display: flex;
  align-items: center;

  img {
    height: 16.5px;
    margin-right: 15px;
  }
`;
