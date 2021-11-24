import Caret from 'components/Caret';
import useIsMobileResolution from 'hooks/useIsMobileResolution';
import useStores from 'hooks/useStores';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'styles/layout';
import { Text } from 'styles/typography';
import { colors } from 'styles/variables';
import { MONTHS } from 'utils/constants';
import { MonthIndexes } from 'utils/types';
import * as S from './styles';

interface Props {
  initialMonth?: MonthIndexes;
  initialYear?: number;
}

function ReachDate({ initialMonth, initialYear }: Props): JSX.Element {
  const date = new Date();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  const isMobile = useIsMobileResolution();
  const { savingsStore } = useStores();
  const [month, _setMonth] = useState<number>(
    () => initialMonth ?? new Date().getMonth()
  );
  const monthRef = useRef<number>(month);
  const [year, _setYear] = useState<number>(
    () => initialYear ?? new Date().getFullYear()
  );
  const yearRef = useRef<number>(year);
  const [isDecrementEnabled, setIsDecrementEnabled] = useState(
    () => currentMonth === month && currentYear <= year
  );
  const elementRef = useRef<HTMLDivElement>();

  const setMonth = (state: number) => {
    monthRef.current = state;
    _setMonth(state);
  };

  const setYear = (state: number) => {
    yearRef.current = state;
    _setYear(state);
  };

  const handleDecrement = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    if (currentYear === yearRef.current && currentMonth === monthRef.current)
      return;

    if (monthRef.current === 0) {
      setMonth(11);
      setYear(yearRef.current - 1);

      return;
    }

    setMonth(monthRef.current - 1);
  };

  const handleIncrement = () => {
    if (monthRef.current === 11) {
      setMonth(0);
      setYear(yearRef.current + 1);

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

    setIsDecrementEnabled(currentMonth === month && currentYear >= year);
  }, [month]);

  useEffect(() => {
    savingsStore.setGoalYear(year);
  }, [year]);

  return (
    <S.Container ref={elementRef as any} tabIndex={-1} data-testid="reachDate">
      <Row justify="space-between" align="center">
        <Caret
          direction="left"
          onClick={handleDecrement}
          data-testid="reachDateDecrement"
          className={isDecrementEnabled ? 'disabled' : ''}
          cursor="pointer"
        />
        <Col span={3} align="center" justify="space-between">
          <Text
            color={colors.BLUE_GRAY_900}
            margin="0 0 10px 0"
            bold
            size={isMobile ? 'xsmall' : 'small'}
            data-testid="reachDateMonth"
          >
            {MONTHS[month]}
          </Text>
          <Text
            color={colors.BLUE_GRAY_400}
            data-testid="reachDateYear"
            size={isMobile ? 'xsmall' : 'small'}
          >
            {year}
          </Text>
        </Col>
        <Caret
          direction="right"
          onClick={handleIncrement}
          data-testid="reachDateIncrement"
          cursor="pointer"
        />
      </Row>
    </S.Container>
  );
}

export default ReachDate;
