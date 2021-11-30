// import original module declarations
import 'styled-components';
import { ThemeColors,
        ThemeFontSize,
        ThemeSpace,
        ThemeInterval,
        ThemeVerticalInterval,
        ThemeDevice,
        ThemeDeviceSizes,
        ThemeBoder, } from './theme'

// and extend them!
declare module 'styled-components' {
  
  export interface DefaultTheme {
    colors: ThemeColors;
    fontSizes: ThemeFontSize;
    space: ThemeSpace;
    interval: ThemeInterval;
    verticalInterval: ThemeVerticalInterval;
    device: ThemeDevice;
    deviceSizes: ThemeDeviceSizes;
    border: ThemeBoder;
  }
}