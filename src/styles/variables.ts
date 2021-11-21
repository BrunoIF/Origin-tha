import { TextSizes } from './typography';

const WHITE = '#FFF';
const DARK = '#000';
const PRIMARY = '#1b31a8';
const SECONDARY = '#0079FF';
const BLUE_GRAY_10 = '#F4F8FA;';
const BLUE_GRAY_400 = '#708797';
const BLUE_GRAY_600 = '#4D6475';
const BLUE_GRAY_900 = '#1E2A32';
const LIGHT_GRAY = '#E9EEF2';

export const colors = {
  WHITE,
  DARK,
  LIGHT_GRAY,
  PRIMARY,
  SECONDARY,
  BLUE_GRAY_10,
  BLUE_GRAY_400,
  BLUE_GRAY_900,
  BLUE_GRAY_600,
};

export const TEXT_FONT_SIZES: { [key in TextSizes]: string } = {
  xxsmall: '12px',
  xsmall: '14px',
  small: '16px',
  medium: '18px',
  large: '20px',
  xlarge: '24px',
};

export const TEXT_FONT_SIZES_DESKTOP: { [key in TextSizes]: string } = {
  xxsmall: '12px',
  xsmall: '14px',
  small: '16px',
  medium: '20px',
  large: '24px',
  xlarge: '32px',
};
