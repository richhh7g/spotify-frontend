import styled from 'styled-components';

export const Container = styled.div`
  min-height: 590px;
  width: 260px;

  display: flex;
  flex-direction: column;

  padding: 10px 0px 0px 15px;
  background: #121212;

  > div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
    padding: 10px 15px 0px 0px;

    span {
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      line-height: 35px;
      border-bottom: 1px solid #d8d8d8;
    }
  }

  button {
    width: 230px;

    background: transparent;

    color: #fff;
    font-weight: bold;

    padding: 8px;
    margin: 50px 0 20px;

    border: 1px solid #b2b2b2;
    border-radius: 20px;

    &:hover {
      border: 1px solid #fff;
    }
  }
`;

export const FriendList = styled.ul`
  max-height: calc(100vh - 145px);
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  overflow-x: hidden;

  scrollbar-face-color: #979797; /* Firefox 63 compatibility */
  scrollbar-track-color: transparent; /* Firefox 63 compatibility */
  scrollbar-color: #979797 transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 1.5px;
    padding: 100px;
    margin: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background: #979797;
    border-radius: 10px;
  }
`;

export const FriendCard = styled.li`
  height: 70px;
  width: 100%;

  margin-top: 25px;

  list-style: none;
  display: flex;
  align-items: center;

  &:first-child {
    margin-top: 0px;
  }

  &:hover {
    opacity: 0.7;
  }

  > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .details {
    display: flex;
    align-items: baseline;
    flex-direction: column;
    width: 165px;
    padding-right: 5px;

    > h1 {
      width: 100%;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      color: #f1f1f1;
      font-size: 15px;
      font-weight: normal;
      line-height: 28px;
    }

    span {
      width: 100%;

      /* padding-bottom: 5px; */

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      color: #b3b3b3;
      font-size: 12px;
      line-height: 16px;
    }

    div {
      display: flex;
      align-items: center;

      height: 10px;
      width: 100%;

      margin-top: 5px;

      img {
        height: 14px;
        width: 14px;
        margin-right: 5px;
      }

      h1 {
        width: 100%;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        color: #b3b3b3;
        font-size: 12px;
      }
    }
  }

  div {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    img.icon-volume {
      height: 12px;
      width: 16px;

      margin-top: 6px;
    }

    small {
      margin-top: 6px;

      font-size: 11px;
      font-weight: normal;
      color: #b3b3b3;
    }
  }
`;
