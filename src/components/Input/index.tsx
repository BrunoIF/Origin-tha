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

  const handleChange = (el: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = el;

    const areAllNumberRegex = /^([\d,.]+)$/;
    if (
      type === 'number' &&
      !areAllNumberRegex.test(value) &&
      value.length !== 0
    ) {
      return;
    }

    const formattedValue = mask?.(value) ?? value;
    setInputValue(formattedValue);
    onChange?.(value);
  };

  return (
    <S.InputContainer
      onClick={() => inputRef.current?.focus()}
      data-testid="inputContainer"
    >
      {preffix}
      <S.StyledInput
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        ref={inputRef as any}
        data-testid="input"
        {...props}
      ></S.StyledInput>
    </S.InputContainer>
  );
}

export default Input;
