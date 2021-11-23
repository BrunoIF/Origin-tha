import styled from 'styled-components';
import { colors, TEXT_FONT_SIZES } from 'styles/variables';
import { MOBILE_BREAKPOINT } from 'utils/constants';

export const Button = styled.button`
  height: 56px;
  width: 105%;
  border-radius: 32px;
  text-align: center;
  border: none;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: ${TEXT_FONT_SIZES.small};
  background-color: ${colors.PRIMARY};
  color: ${colors.WHITE};

  @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    max-width: 320px;
  }
`;
