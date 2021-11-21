import { BuyAHouseIcon } from 'assets';
import React from 'react';
import { Col, Row } from 'styles/layout';
import { colors } from 'styles/variables';
import { Text } from 'styles/typography';

function Header(): JSX.Element {
  return (
    <Row>
      <BuyAHouseIcon />
      <Col span={8} margin="0 0 0 16px" justify="space-evenly">
        <Text size="large" bold>
          Buy a house
        </Text>
        <Text size="medium" color={colors.BLUE_GRAY_400}>
          Saving goal
        </Text>
      </Col>
    </Row>
  );
}

export default Header;
