import styled from 'styled-components';
import {
  colors,
  TEXT_FONT_SIZES,
  TEXT_FONT_SIZES_DESKTOP,
} from 'styles/variables';
import { MOBILE_BREAKPOINT } from 'utils/constants';

export const StyledInput = styled.input`
  width: 100%;
  border: 0;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  font-size: ${TEXT_FONT_SIZES.large};
  color: ${colors.BLUE_GRAY_600};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.LIGHT_GRAY};
  }

  @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    font-size: ${TEXT_FONT_SIZES_DESKTOP.large};
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
  transition: 0.2s;
`;
