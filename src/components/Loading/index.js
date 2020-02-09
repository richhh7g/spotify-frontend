import React from 'react';

import { Spinner } from './styles';

import loadingImg from 'assets/svgs/loading.svg';

export default function Loading() {
  return <Spinner src={loadingImg} alt="Carregando..." draggable="false" />;
}
