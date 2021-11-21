import Amount from 'components/Amount';
import Button from 'components/Button';
import LabelContainer from 'components/LabelContainer';
import ReachDate from 'components/ReachDate';
import SavingsSummary from 'components/SavingsSummary';
import useIsMobileResolution from 'hooks/useIsMobileResolution';
import React from 'react';
import { Col, Row } from 'styles/layout';
import Header from './Header';
import * as S from './styles';

function Content(): JSX.Element {
  const isMobile = useIsMobileResolution();

  return (
    <S.Card>
      <Header />
      {isMobile ? (
        <>
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
        </>
      ) : (
        <>
          <Row margin="24px 0 16px">
            <Col span={7} margin="0 16px 0 0">
              <LabelContainer label="Total amount">
                <Amount />
              </LabelContainer>
            </Col>
            <Col span={5}>
              <LabelContainer label="Reach goal by">
                <ReachDate />
              </LabelContainer>
            </Col>
          </Row>
        </>
      )}
      <Row margin="24px 0 0 0">
        <SavingsSummary />
      </Row>
      <Row margin="32px 0 0" justify="center">
        <Button>Confirm</Button>
      </Row>
    </S.Card>
  );
}

export default Content;
