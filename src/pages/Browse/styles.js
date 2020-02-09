import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Spinner } from 'components/Loading/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-top: 80px;
`;

export const Title = styled.span`
  font-size: 42px;
  font-weight: bold;

  ${Spinner} {
    height: 24px;

    margin-left: 5px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 55px;

  margin: 20px 0;
`;

export const Playlist = styled(Link)`
  width: 250px;

  display: flex;
  flex-direction: column;

  img {
    height: 230px;
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
