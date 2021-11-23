import { fireEvent, render, screen } from '@testing-library/react';
import { maskCurrency } from 'utils/masks';
import Input from '.';

describe('components/Input', () => {
  test('The component renders', () => {
    render(<Input value={''} />);

    const inputElement = screen.getByTestId('input');

    expect(screen.getByTestId('inputContainer')).toBeInTheDocument();
    expect(screen.getByTestId('inputContainer')).toContainElement(inputElement);
  });

  test('The value is rendered', () => {
    const value = 'Test';
    render(<Input value={value} />);

    expect(screen.getByTestId('input')).toHaveValue(value);
  });

  test('The initial value is formatted with the provided mask function', () => {
    const value = '1000';
    render(<Input value={value} mask={maskCurrency} />);

    expect(screen.getByTestId('input')).toHaveValue('10.00');
  });

  test('The value is formatted with the provided mask function', () => {
    const value = '25000';
    const formattedValue = maskCurrency(value);

    render(<Input value={value} mask={maskCurrency} />);

    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value } });

    expect(input).toHaveValue(formattedValue);
  });
});
