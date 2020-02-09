import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 590px;

  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 20px;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px, 100%;
  background-repeat: no-repeat;
  background-position: top;

  overflow-y: scroll;
  overflow-x: hidden;

  scrollbar-face-color: #979797; /* Firefox 63 compatibility */
  scrollbar-track-color: transparent; /* Firefox 63 compatibility */
  scrollbar-color: #979797 transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 1.5px;
    margin: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background: #979797;
    border-radius: 10px;
  }
`;
