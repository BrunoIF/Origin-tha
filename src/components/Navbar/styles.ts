import styled from 'styled-components';
import { colors } from 'styles/variables';
import { OriginLogo as OriginLogoSVG } from 'assets';

export const Navbar = styled.div`
  height: 56px;
  width: 100vw;
  background-color: ${colors.WHITE};
  display: flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

export const OriginLogo = styled(OriginLogoSVG)`
  width: 75px;
  height: 24px;
`;
