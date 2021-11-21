import styled from 'styled-components';
import { colors } from 'styles/variables';
import { OriginLogo as OriginLogoSVG } from 'assets';
import { MOBILE_BREAKPOINT } from 'utils/constants';

export const Navbar = styled.div`
  height: 56px;
  width: 100vw;
  background-color: ${colors.WHITE};
  display: flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;

  @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    height: 80px;
    padding: 24px 56px;
  }
`;

export const OriginLogo = styled(OriginLogoSVG)`
  width: 75px;
  height: 24px;

  @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    height: 32px;
    width: 100px;
  }
`;
