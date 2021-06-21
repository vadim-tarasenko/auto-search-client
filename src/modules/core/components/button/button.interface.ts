import type { ButtonHTMLAttributes, ReactElement } from 'react';

export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type ButtonSize = 'large' | 'medium' | 'small';

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  startAdornment?: ReactElement;
  endAdornment?: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>;
