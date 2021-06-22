import colors, { Color, ColorName } from 'styles/colors';

export type Theme = {
  palette: Record<ColorName, Color>;
};

export const theme: Theme = {
  palette: colors,
};
