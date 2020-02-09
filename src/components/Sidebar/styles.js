import styled from 'styled-components';

import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
  height: 100%;
  width: 200px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  color: #b3b3b3;
  background: #121212;

  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  position: relative;

  &:first-child {
    margin-top: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      font-size: 13px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};
      line-height: 32px;
      text-decoration: none;

      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      font-weight: 300;
      line-height: 22px;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }

    ${Spinner} {
      height: 15px;

      justify-content: center;
      align-items: center;

      margin-left: 5px;
    }
  }
`;

export const NewPlaylist = styled.button`
  display: flex;
  align-items: center;

  padding: 15px 25px;
  background: transparent;

  border: none;
  border-top: 1px solid #282828;

  font-size: 13px;
  color: #b3b3b3;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;
