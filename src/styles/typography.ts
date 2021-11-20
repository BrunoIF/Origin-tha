import styled from 'styled-components';
import { colors } from './variables';

interface TitleProps {
  margin: string;
}

export const Title = styled.h1<TitleProps>`
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: ${colors.BLUE};
  text-align: center;
  margin: ${(props) => props.margin};

  span {
    font-weight: 600;
  }
`;
