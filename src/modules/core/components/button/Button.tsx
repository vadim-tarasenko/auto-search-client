import './button.css';
import { FC } from 'react';

import type { ButtonProps } from './button.interface';

// todo: this is only example component
export const Button: FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
