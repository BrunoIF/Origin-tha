import styled from 'styled-components';
import { colors } from 'styles/variables';
import { MOBILE_BREAKPOINT } from 'utils/constants';

export const Card = styled.div`
  background-color: ${colors.WHITE};
  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  padding: 30px 24px 40px;
  width: 100%;

  @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }

  @media screen and (min-width: 1400px) {
    width: 30%;
  }
`;
