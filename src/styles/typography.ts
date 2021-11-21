import styled from 'styled-components';
import { colors } from './variables';

interface TitleProps {
  margin: string;
}

export const Title = styled.h1<TitleProps>`
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: ${colors.PRIMARY};
  margin: ${(props) => props.margin};

  .bold {
    font-weight: 600;
  }
`;

type TextSizes = 'small' | 'medium' | 'large' | 'xlarge';

type FontTypes = 'primary' | 'secondary';

interface TextProps {
  size?: TextSizes;
  color?: string;
  bold?: boolean;
  margin?: string;
  font?: FontTypes;
  align?: 'left' | 'center' | 'right';
}

const TEXT_FONT_SIZES: { [key in TextSizes]: string } = {
  small: '12px',
  medium: '14px',
  large: '20px',
  xlarge: '24px',
};

const FONT_STYLES: { [key in FontTypes]: { [prop: string]: string } } = {
  primary: { 'font-family': 'Work Sans, sans-serif' },
  secondary: { 'font-family': 'Rubik, sans-serif', 'font-weight': '500' },
};

export const Text = styled.p<TextProps>`
  font-size: ${(props) => TEXT_FONT_SIZES[props.size as TextSizes]};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.align};

  ${(props) => ({ ...FONT_STYLES[props.font as FontTypes] })};

  span.bold {
    font-weight: 600;
  }
`;

Text.defaultProps = {
  size: 'medium',
  color: colors.DARK,
  font: 'primary',
  align: 'left',
};
