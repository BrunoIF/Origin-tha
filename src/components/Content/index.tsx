import { BuyAHouseIcon } from 'assets';
import React from 'react';
import { Col, Row } from 'styles/layout';
import { Text } from 'styles/typography';
import { colors } from 'styles/variables';
import * as S from './styles';

function Content(): JSX.Element {
  return (
    <S.Card>
      <Col span={9}>
        <Row justify="space-between">
          <BuyAHouseIcon />
          <Col span={8} margin="0 0 0 16px" justify="space-evenly">
            <Text size="large" bold>
              Buy a house
            </Text>
            <Text size="medium" color={colors.BLUE_GRAY}>
              Saving goal
            </Text>
          </Col>
        </Row>
      </Col>
    </S.Card>
  );
}

export default Content;
