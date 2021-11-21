import { CurrencyIcon } from 'assets';
import Input from 'components/Input';
import useStores from 'hooks/useStores';
import React from 'react';
import { maskNumber } from 'utils/masks';
import { sanitizeNumber } from 'utils/utils';

function Amount(): JSX.Element {
  const { savingsStore } = useStores();

  const handleChange = (value: string) => {
    const sanitized = sanitizeNumber(value);
    savingsStore.setGoalAmount(Number(sanitized));
  };

  return (
    <Input
      placeholder="1,000"
      mask={maskNumber}
      preffix={<CurrencyIcon />}
      type="number"
      onChange={handleChange}
    />
  );
}

export default Amount;
