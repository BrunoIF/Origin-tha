import Caret from 'components/Caret';
import useStores from 'hooks/useStores';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'styles/layout';
import { Text } from 'styles/typography';
import { colors } from 'styles/variables';
import { MONTHS } from 'utils/constants';
import * as S from './styles';

function ReachDate(): JSX.Element {
  const { savingsStore } = useStores();
  const [month, _setMonth] = useState<number>(() => new Date().getMonth());
  const monthRef = useRef<number>(month);
  const [year, setYear] = useState<number>(() => new Date().getFullYear());
  const elementRef = useRef<HTMLDivElement>();

  const setMonth = (state: number) => {
    monthRef.current = state;
    _setMonth(state);
  };

  const handleDecrement = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    if (year === currentYear && currentMonth === monthRef.current) return;

    if (monthRef.current === 0) {
      setMonth(11);
      setYear((prevYear) => prevYear - 1);

      return;
    }

    setMonth(monthRef.current - 1);
  };

  const handleIncrement = () => {
    if (monthRef.current === 11) {
      setMonth(0);
      setYear(year + 1);

      return;
    }

    setMonth(monthRef.current + 1);
  };

  useEffect(() => {
    const handleKeyPress = (keyEvent: KeyboardEvent) => {
      keyEvent.preventDefault();
      if (keyEvent.code === 'ArrowRight') handleIncrement();
      if (keyEvent.code === 'ArrowLeft') handleDecrement();
    };

    elementRef.current?.addEventListener('keydown', handleKeyPress);

    return () =>
      elementRef.current?.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    savingsStore.setGoalMonth(month);
  }, [month]);

  useEffect(() => {
    savingsStore.setGoalYear(year);
  }, [year]);

  return (
    <S.Container ref={elementRef as any} tabIndex={-1}>
      <Row justify="space-between" align="center">
        <Caret direction="left" onClick={handleDecrement} />
        <Col span={3} align="center" justify="space-between">
          <Text color={colors.BLUE_GRAY_900} margin="0 0 10px 0" bold>
            {MONTHS[month]}
          </Text>
          <Text color={colors.BLUE_GRAY_400}>{year}</Text>
        </Col>
        <Caret direction="right" onClick={handleIncrement} />
      </Row>
    </S.Container>
  );
}

export default ReachDate;
