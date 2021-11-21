import Amount from 'components/Amount';
import Button from 'components/Button';
import LabelContainer from 'components/LabelContainer';
import ReachDate from 'components/ReachDate';
import SavingsSummary from 'components/SavingsSummary';
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
      <Row margin="24px 0 0 0">
        <SavingsSummary />
      </Row>
      <Row margin="32px 0 0">
        <Button>Confirm</Button>
      </Row>
    </S.Card>
  );
}

export default Content;
