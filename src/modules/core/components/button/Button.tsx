import { FC } from 'react';

import type { ButtonProps } from './button.interface';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button type='button' {...props}>
      {children}
    </button>
  );
};

export default Button;
