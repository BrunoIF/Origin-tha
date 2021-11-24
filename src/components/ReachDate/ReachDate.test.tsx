import { fireEvent, render, screen } from '@testing-library/react';
import { MONTHS } from 'utils/constants';
import { MonthIndexes } from 'utils/types';
import ReachDate from '.';

describe('components/ReachDate', () => {
  const initialMonth = 0;
  const initialYear = new Date().getFullYear() + 5;

  test('The component renders', () => {
    render(<ReachDate initialMonth={0} initialYear={initialYear} />);

    const component = screen.getByTestId('reachDate');
    const reachDateMonths = screen.getByTestId('reachDateMonth');
    const reachDateYear = screen.getByTestId('reachDateYear');

    const expectedMonth = MONTHS[initialMonth];
    const expectedYear = initialYear.toString();

    expect(component).toBeInTheDocument();
    expect(reachDateMonths).toHaveTextContent(expectedMonth);
    expect(reachDateYear).toHaveTextContent(expectedYear);
  });

  test('Display current month and year if no initial data is provided', () => {
    render(<ReachDate />);

    const component = screen.getByTestId('reachDate');
    const reachDateMonths = screen.getByTestId('reachDateMonth');
    const reachDateYear = screen.getByTestId('reachDateYear');
    const decrementButton = screen.getByTestId('reachDateDecrement');

    const date = new Date();
    const expectedMonth = MONTHS[date.getMonth()];
    const expectedYear = date.getFullYear().toString();

    expect(component).toBeInTheDocument();
    expect(reachDateMonths).toHaveTextContent(expectedMonth);
    expect(reachDateYear).toHaveTextContent(expectedYear);
    expect(decrementButton).toHaveClass('disabled');
  });

  test('Increments month', () => {
    render(<ReachDate initialMonth={initialMonth} />);

    const incrementButton = screen.getByTestId('reachDateIncrement');
    const reachDateMonths = screen.getByTestId('reachDateMonth');

    fireEvent.click(incrementButton);

    const expectedMonth = MONTHS[initialMonth + 1];

    expect(reachDateMonths).toHaveTextContent(expectedMonth);
  });

  test('Decrements month', () => {
    const initialMonth = 10;
    render(<ReachDate initialMonth={initialMonth} initialYear={initialYear} />);

    const decrementButton = screen.getByTestId('reachDateDecrement');
    const reachDateMonths = screen.getByTestId('reachDateMonth');

    fireEvent.click(decrementButton);

    const expectedMonth = MONTHS[initialMonth - 1];

    expect(reachDateMonths).toHaveTextContent(expectedMonth);
  });

  test('Does not decrement before current month', () => {
    const date = new Date();
    const initialMonth = date.getMonth() as MonthIndexes;
    const currentYear = date.getFullYear().toString();

    render(<ReachDate initialMonth={initialMonth} />);

    const decrementButton = screen.getByTestId('reachDateDecrement');
    const reachDateMonths = screen.getByTestId('reachDateMonth');
    const reachDateYear = screen.getByTestId('reachDateYear');

    fireEvent.click(decrementButton);

    const expectedMonth = MONTHS[initialMonth];

    expect(reachDateMonths).toHaveTextContent(expectedMonth);
    expect(reachDateYear).toHaveTextContent(currentYear);
    expect(decrementButton).toHaveClass('disabled');
  });

  test('Increments year', () => {
    const initialMonth = 11;
    render(<ReachDate initialMonth={initialMonth} initialYear={initialYear} />);

    const incrementButton = screen.getByTestId('reachDateIncrement');
    const reachDateMonths = screen.getByTestId('reachDateMonth');
    const reachDateYear = screen.getByTestId('reachDateYear');

    fireEvent.click(incrementButton);

    const expectedMonth = MONTHS[0];
    const expectedYear = (initialYear + 1).toString();

    expect(reachDateMonths).toHaveTextContent(expectedMonth);
    expect(reachDateYear).toHaveTextContent(expectedYear);
  });

  test('Decrements year', () => {
    const initialMonth = 0;
    render(<ReachDate initialMonth={initialMonth} initialYear={initialYear} />);

    const decrementButton = screen.getByTestId('reachDateDecrement');
    const reachDateMonths = screen.getByTestId('reachDateMonth');
    const reachDateYear = screen.getByTestId('reachDateYear');

    fireEvent.click(decrementButton);

    const expectedMonth = MONTHS[11];
    const expectedYear = (initialYear - 1).toString();

    expect(reachDateMonths).toHaveTextContent(expectedMonth);
    expect(reachDateYear).toHaveTextContent(expectedYear);
  });

  test('Increments month when pressing ArrowRight', () => {
    const initialMonth = 0;
    render(<ReachDate initialMonth={initialMonth} initialYear={initialYear} />);

    const reachDateComponent = screen.getByTestId('reachDate');
    const reachDateMonths = screen.getByTestId('reachDateMonth');

    reachDateComponent.focus();
    fireEvent.keyDown(reachDateComponent, {
      key: 'ArrowRight',
      code: 'ArrowRight',
    });

    const expectedMonth = MONTHS[1];

    expect(reachDateMonths).toHaveTextContent(expectedMonth);
  });

  test('Decrements month when pressing ArrowLeft', () => {
    const initialMonth = 0;
    render(<ReachDate initialMonth={initialMonth} initialYear={initialYear} />);

    const reachDateComponent = screen.getByTestId('reachDate');
    const reachDateMonths = screen.getByTestId('reachDateMonth');

    reachDateComponent.focus();
    fireEvent.keyDown(reachDateComponent, {
      key: 'ArrowLeft',
      code: 'ArrowLeft',
    });

    const expectedMonth = MONTHS[11];

    expect(reachDateMonths).toHaveTextContent(expectedMonth);
  });
});
