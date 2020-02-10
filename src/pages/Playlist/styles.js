import styled, { css } from 'styled-components';

import { Spinner } from 'components/Loading/styles';

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    height: 48px;
  }

  ${props =>
    props.loading &&
    css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 220px;
    width: 220px;
  }

  div {
    margin-left: 20px;

    span {
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    h1 {
      margin-top: 10px;
      font-size: 48px;
    }

    p {
      margin-top: 0;

      color: #b3b3b3;
      font-size: 11px;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }

    button {
      height: 32px;

      background: #1db854;

      color: #fff;
      font-size: 12px;
      letter-spacing: 1.11px;
      line-height: 32px;

      padding: 0 35px;
      margin-top: 10px;
      border-radius: 16px;
      border: 0;
    }
  }
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  thead th {
    color: #b3b3b3;
    font-size: 11px;
    font-weight: normal;
    letter-spacing: 1.11px;
    text-transform: uppercase;

    padding: 5px 10px;

    &:last-child {
      text-align: right;
    }
  }

  tbody td {
    border-top: 1px solid #282828;

    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    }
  }

  tbody tr:hover td {
    background: #282828;
  }
`;
