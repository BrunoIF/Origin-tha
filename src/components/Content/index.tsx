import React from 'react';
import Header from './Header';
import * as S from './styles';

function Content(): JSX.Element {
  return (
    <S.Card>
      <Header />
    </S.Card>
  );
}

export default Content;
