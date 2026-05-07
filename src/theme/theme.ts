import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'orange',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: 'JetBrains Mono, Fira Code, monospace',
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '800',
  },
  radius: {
    xs: '6px',
    sm: '8px',
    md: '12px',
    lg: '18px',
    xl: '26px',
  },
  defaultRadius: 'lg',
  other: {
    bgBase: '#0c1114',
    bgSurface: '#141a1e',
    bgRaised: '#1b2227',
    border: '#273138',
    bgBaseLight: '#f7f3ee',
    bgSurfaceLight: '#ffffff',
    borderLight: '#e4ddd4',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Card: {
      defaultProps: {
        radius: 'lg',
        padding: 'xl',
      },
    },
    Badge: {
      defaultProps: {
        radius: 'xl',
      },
    },
  },
});
