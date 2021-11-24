import React, { useRef, useState } from 'react';
import * as S from './styles';

interface Props {
  value?: string;
  placeholder?: string;
  onChange?(value: string): void;
  preffix?: React.ReactNode;
  type?: 'text' | 'number';
  mask?(value: string): string;
}

function Input({
  value = '',
  onChange,
  preffix,
  placeholder,
  type = 'text',
  mask,
  ...props
}: Props): JSX.Element {
  const [inputValue, setInputValue] = useState<string>(mask?.(value) ?? value);
  const inputRef = useRef<HTMLDivElement>();
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (el: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = el;

    const areAllNumberRegex = /^([\d]+)$/;
    const sanitizedValue = value.replace(/[,.]/g, '');
    if (
      type === 'number' &&
      !areAllNumberRegex.test(sanitizedValue) &&
      value.length !== 0
    ) {
      if (sanitizedValue.length === 0) {
        setInputValue('');
        onChange?.('');
      }

      return;
    }

    const formattedValue = mask?.(value) ?? value;
    setInputValue(formattedValue);
    onChange?.(formattedValue);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  return (
    <S.InputContainer
      onClick={handleFocus}
      data-testid="inputContainer"
      tabIndex={-1}
      focused={isFocused}
    >
      {preffix}
      <S.StyledInput
        value={inputValue}
        onChange={handleChange}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        ref={inputRef as any}
        data-testid="input"
        {...props}
      ></S.StyledInput>
    </S.InputContainer>
  );
}

export default Input;
