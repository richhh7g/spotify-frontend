import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-top: 80px;
`;

export const Title = styled.span`
  font-size: 42px;
  font-weight: bold;
`;

export const List = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Playlist = styled(Link)`
  width: 220px;

  display: flex;
  flex-direction: column;

  margin-left: 20px;

  &:first-child {
    margin: 0;
  }

  img {
    height: 220px;
  }

  &:hover img {
    opacity: 0.4;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;

    font-size: 13px;
    line-height: 22px;
    color: #b3b3b3;
  }
`;
