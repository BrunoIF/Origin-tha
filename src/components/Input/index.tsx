import React, { useRef, useState } from 'react';
import * as S from './styles';

interface Props {
  value: string;
  placeholder?: string;
  onChange?(value: string): void;
  preffix?: React.ReactNode;
  type?: 'text' | 'number';
}

function Input({
  value,
  onChange,
  preffix,
  placeholder,
  type = 'text',
  ...props
}: Props): JSX.Element {
  const [inputValue, setInputValue] = useState<string>(value);
  const inputRef = useRef<HTMLDivElement>();

  const handleChange = (val: string) => {
    setInputValue(val);
    onChange?.(inputValue);
  };

  return (
    <S.InputContainer onClick={() => inputRef.current?.focus()}>
      {preffix}
      <S.StyledInput
        value={inputValue}
        onChange={(el) => handleChange(el.target.value)}
        placeholder={placeholder}
        ref={inputRef as any}
        type={type}
        {...props}
      ></S.StyledInput>
    </S.InputContainer>
  );
}

export default Input;
