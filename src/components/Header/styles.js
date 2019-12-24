import styled from 'styled-components';

import searchIcon from 'assets/svgs/search.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`;

export const Search = styled.div`
  height: 24px;
  width: 175px;

  display: flex;
  align-items: center;
  border-radius: 12px;

  padding: 6px 7px 6px 26px;
  background: #fff url(${searchIcon}) no-repeat 7px center;

  input {
    width: 130px;

    font-size: 13px;
    color: #121212;
    border: 0;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;

  img {
    height: 27px;
    width: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
