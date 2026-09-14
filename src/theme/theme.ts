import { createTheme, MantineColorsTuple } from '@mantine/core';

const accent: MantineColorsTuple = [
  '#EEF4F9',
  '#D3E3EF',
  '#AEC9DF',
  '#87AFCE',
  '#6699BE',
  '#4C89B4',
  '#3E7CB1',
  '#316A99',
  '#295A82',
  '#1E4463',
];

export const theme = createTheme({
  primaryColor: 'accent',
  primaryShade: 6,
  colors: {
    accent,
  },
  fontFamily: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: '"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',
  headings: {
    fontFamily: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '700',
  },
  radius: {
    xs: '3px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '10px',
  },
  defaultRadius: 'sm',
  other: {
    ink: '#13161A',
    surface: '#1B1F25',
    surfaceRaised: '#232830',
    line: '#2B303A',
    lineStrong: '#3C4350',
    text: '#E7E4DD',
    textDim: '#8E949C',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'sm',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        padding: 'xl',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'xs',
      },
    },
  },
});
