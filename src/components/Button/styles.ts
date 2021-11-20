import styled from 'styled-components';
import { colors } from 'styles/variables';

export const Button = styled.button`
  height: 56px;
  min-width: 105%;
  transform: translateX(-2.5%);
  border-radius: 32px;
  text-align: center;
  border: none;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  background-color: ${colors.PRIMARY};
  color: ${colors.WHITE};
`;
