import { createTheme, MantineColorsTuple } from '@mantine/core';

const indigo: MantineColorsTuple = [
  '#eef2ff',
  '#e0e7ff',
  '#c7d2fe',
  '#a5b4fc',
  '#818cf8',
  '#6366f1',
  '#4f46e5',
  '#4338ca',
  '#3730a3',
  '#312e81',
];

const cyan: MantineColorsTuple = [
  '#ecfeff',
  '#cffafe',
  '#a5f3fc',
  '#67e8f9',
  '#22d3ee',
  '#06b6d4',
  '#0891b2',
  '#0e7490',
  '#155e75',
  '#164e63',
];

export const theme = createTheme({
  primaryColor: 'indigo',
  colors: { indigo, cyan },
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: 'JetBrains Mono, Fira Code, monospace',
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '700',
  },
  radius: {
    xs: '4px',
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
  },
  defaultRadius: 'md',
  other: {
    // Dark mode surfaces
    bgBase: '#0f1117',
    bgSurface: '#1a1d27',
    bgRaised: '#22263a',
    border: '#2e3347',
    // Light mode surfaces
    bgBaseLight: '#f8fafc',
    bgSurfaceLight: '#ffffff',
    borderLight: '#e2e8f0',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
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
        radius: 'sm',
      },
    },
  },
});
