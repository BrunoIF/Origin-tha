import Amount from 'components/Amount';
import React from 'react';
import { Row } from 'styles/layout';
import Header from './Header';
import * as S from './styles';

function Content(): JSX.Element {
  return (
    <S.Card>
      <Header />
      <Row margin="24px 0">
        <Amount />
      </Row>
    </S.Card>
  );
}

export default Content;
