import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from 'utils/constants';
import { colors, TEXT_FONT_SIZES, TEXT_FONT_SIZES_DESKTOP } from './variables';

interface TitleProps {
  margin: string;
}

export const Title = styled.h1<TitleProps>`
  font-family: 'Work Sans', sans-serif;
  font-size: ${TEXT_FONT_SIZES.medium};
  font-weight: 400;
  text-align: center;
  color: ${colors.PRIMARY};
  margin: ${(props) => props.margin};

  .bold {
    font-weight: 600;
  }

  @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    font-size: ${TEXT_FONT_SIZES_DESKTOP.medium};
  }
`;

export type TextSizes =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge';

type FontTypes = 'primary' | 'secondary';

interface TextProps {
  size?: TextSizes;
  color?: string;
  bold?: boolean;
  margin?: string;
  font?: FontTypes;
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
}

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

  ${(props) =>
    props.truncate &&
    `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;`}

  span.bold {
    font-weight: 600;
  }

  @media screen and (min-width: ${MOBILE_BREAKPOINT}px) {
    font-size: ${(props) => TEXT_FONT_SIZES_DESKTOP[props.size as TextSizes]};
  }
`;

Text.defaultProps = {
  size: 'small',
  color: colors.DARK,
  font: 'primary',
  align: 'left',
};
