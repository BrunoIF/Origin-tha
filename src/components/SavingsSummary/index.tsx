import React from 'react';
import { Row } from 'styles/layout';
import { Text } from 'styles/typography';
import { colors } from 'styles/variables';
import * as S from './styles';

function SavingsSummary(): JSX.Element {
  return (
    <S.SummaryContainer>
      <S.SummaryContent>
        <Row justify="space-between" align="center">
          <Text size="large">Monthly amount</Text>
          <Text size="xlarge" color={colors.SECONDARY} font="secondary">
            $520.83
          </Text>
        </Row>
      </S.SummaryContent>
      <S.SummaryContent bgColor={colors.BLUE_GRAY_10}>
        <Row>
          <Text align="center" size="small">
            You’re planning <span className="bold">48 monthly deposits</span> to
            reach your <span className="bold">$25,000</span> goal by{' '}
            <span className="bold">October 2020</span>.
          </Text>
        </Row>
      </S.SummaryContent>
    </S.SummaryContainer>
  );
}

export default SavingsSummary;
