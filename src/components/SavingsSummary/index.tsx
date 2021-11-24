import useStores from 'hooks/useStores';
import { observer } from 'mobx-react';
import React from 'react';
import { Col, Row } from 'styles/layout';
import { Text } from 'styles/typography';
import { colors } from 'styles/variables';
import { MONTHS } from 'utils/constants';
import { formatCurrency } from 'utils/formatters';
import * as S from './styles';

function SavingsSummary(): JSX.Element {
  const { savingsStore } = useStores();

  return (
    <S.SummaryContainer>
      <S.SummaryContent>
        <Row justify="space-between" align="center">
          <Col span={7}>
            <Text size="medium">Monthly amount</Text>
          </Col>
          <Col span={5} align="flex-end">
            <Text
              size="xlarge"
              color={colors.SECONDARY}
              font="secondary"
              truncate
            >
              ${formatCurrency(savingsStore.monthlyAmount)}
            </Text>
          </Col>
        </Row>
      </S.SummaryContent>
      <S.SummaryContent bgColor={colors.BLUE_GRAY_10}>
        <Row>
          <Text align="center" size="xxsmall">
            You’re planning{' '}
            <span className="bold">
              {savingsStore.totalMonths} monthly deposits
            </span>{' '}
            to reach your{' '}
            <span className="bold">
              ${formatCurrency(savingsStore.goalAmount)}
            </span>{' '}
            goal by{' '}
            <span className="bold">
              {MONTHS[savingsStore.goalMonth]} {savingsStore.goalYear}
            </span>
            .
          </Text>
        </Row>
      </S.SummaryContent>
    </S.SummaryContainer>
  );
}

export default observer(SavingsSummary);
