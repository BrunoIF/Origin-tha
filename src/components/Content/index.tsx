import Amount from 'components/Amount';
import LabelContainer from 'components/LabelContainer';
import ReachDate from 'components/ReachDate';
import React from 'react';
import { Row } from 'styles/layout';
import Header from './Header';
import * as S from './styles';

function Content(): JSX.Element {
  return (
    <S.Card>
      <Header />
      <Row margin="24px 0 16px">
        <LabelContainer label="Total amount">
          <Amount />
        </LabelContainer>
      </Row>
      <Row margin="24px 0 16px">
        <LabelContainer label="Reach goal by">
          <ReachDate />
        </LabelContainer>
      </Row>
    </S.Card>
  );
}

export default Content;
