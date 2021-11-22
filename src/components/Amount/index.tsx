import { CurrencyIcon } from 'assets';
import Input from 'components/Input';
import useStores from 'hooks/useStores';
import React from 'react';
import { maskNumberV2 } from 'utils/masks';

function Amount(): JSX.Element {
  const { savingsStore } = useStores();

  const handleChange = (value: string) => {
    const sanitized = value.replace(/,/g, '');
    savingsStore.setGoalAmount(Number(sanitized));
  };

  return (
    <Input
      placeholder="1,000"
      mask={maskNumberV2}
      preffix={<CurrencyIcon />}
      type="number"
      onChange={handleChange}
    />
  );
}

export default Amount;
