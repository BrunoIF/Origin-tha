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

type TextSizes = 'small' | 'medium' | 'large';
interface TextProps {
  size?: TextSizes;
  color?: string;
  bold?: boolean;
  margin?: string;
}

const TEXT_FONT_SIZES: { [key in TextSizes]: string } = {
  small: '12px',
  medium: '14px',
  large: '20px',
};

export const Text = styled.p<TextProps>`
  font-size: ${(props) => TEXT_FONT_SIZES[props.size as TextSizes]};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  margin: ${(props) => props.margin};
`;

Text.defaultProps = {
  size: 'medium',
  color: colors.DARK,
};
