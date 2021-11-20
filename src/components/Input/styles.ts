import styled from 'styled-components';
import { colors } from 'styles/variables';

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  color: ${colors.BLUE_GRAY_600};

  &:focus {
    outline: none;
  }
`;

interface InputContainerProps {
  focused?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  height: 56px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${colors.LIGHT_GRAY};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 16px;

  outline: ${(props) => (props.focused ? `1px solid ${colors.DARK}` : 'none')};
`;
