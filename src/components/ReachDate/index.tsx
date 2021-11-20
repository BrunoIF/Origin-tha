import Caret from 'components/Caret';
import React from 'react';
import { Col, Row } from 'styles/layout';
import { Text } from 'styles/typography';
import { colors } from 'styles/variables';
import * as S from './styles';

function ReachDate(): JSX.Element {
  return (
    <S.Container>
      <Row justify="space-between" align="center">
        <Caret direction="left" />
        <Col span={3} align="center" justify="space-between">
          <Text bold margin="0 0 10px 0">
            October
          </Text>
          <Text color={colors.BLUE_GRAY_400}>2021</Text>
        </Col>
        <Caret direction="right" />
      </Row>
    </S.Container>
  );
}

export default ReachDate;
