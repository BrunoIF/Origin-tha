import React from 'react';
import { Text } from 'styles/typography';
import { colors } from 'styles/variables';
import * as S from './styles';

interface Props {
  label: string;
  children: React.ReactNode;
}

function LabelContainer({ label, children }: Props): JSX.Element {
  return (
    <S.Container>
      <Text size="small" color={colors.BLUE_GRAY_900}>
        {label}
      </Text>
      {children}
    </S.Container>
  );
}

export default LabelContainer;
