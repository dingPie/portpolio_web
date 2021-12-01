// my-theme.ts
import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 16}rem`;

const colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray_1: "#222222",
  gray_2: "#767676",
  green_1: "#3cb46e",
};

const fontSizes = {
  small: calcRem(12),
  base: calcRem(14),
  medium: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(22),
  xxl: calcRem(26),
  titleSize: calcRem(50),
};

const space = {
  small: calcRem(4),
  base: calcRem(6),
  medium: calcRem(8),
  lg: calcRem(12),
  xl: calcRem(16),
  xxl: calcRem(24),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const verticalInterval = {
  base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  pc: "1024px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  pc: `only screen and (max-width: ${deviceSizes.pc})`,
};

const border = {
  main: `4px double ${colors.green_1}`
}

const theme: DefaultTheme = {
  colors,
  fontSizes,
  space,
  interval,
  verticalInterval,
  device,
  deviceSizes,
  border,
  // colors :colors,
  // fontSizes: fontSizes,
  // space: fontSizes,
  // interval: interval,
  // verticalInterval: verticalInterval,
  // device: device,
  // deviceSizes: deviceSizes,
};

export type ThemeColors = typeof colors;
export type ThemeFontSize = typeof fontSizes;
export type ThemeSpace = typeof space;
export type ThemeInterval = typeof interval;
export type ThemeVerticalInterval = typeof verticalInterval;
export type ThemeDevice = typeof device;
export type ThemeDeviceSizes = typeof deviceSizes;
export type ThemeBoder = typeof border;

export default theme;