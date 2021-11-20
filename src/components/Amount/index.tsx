import { CurrencyIcon } from 'assets';
import Input from 'components/Input';
import React from 'react';
import { Text } from 'styles/typography';
import { colors } from 'styles/variables';
import { maskNumber } from 'utils/masks';
import * as S from './styles';

function Amount(): JSX.Element {
  return (
    <S.AmountContainer>
      <Text size="small" color={colors.BLUE_GRAY_900}>
        Total amount
      </Text>
      <Input
        placeholder="1,000"
        mask={maskNumber}
        preffix={<CurrencyIcon />}
        type="number"
      />
    </S.AmountContainer>
  );
}

export default Amount;
