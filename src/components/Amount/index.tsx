import { CurrencyIcon } from 'assets';
import Input from 'components/Input';
import React from 'react';
import { maskNumber } from 'utils/masks';

function Amount(): JSX.Element {
  return (
    <Input
      placeholder="1,000"
      mask={maskNumber}
      preffix={<CurrencyIcon />}
      type="number"
    />
  );
}

export default Amount;
