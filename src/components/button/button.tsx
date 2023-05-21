import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cn from 'clsx';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'orange' | 'light';
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, className, color, ...rest }) => {
  return (
    <button {...rest} className={cn('rounded-3xl font-medium shadow-md px-8 py-2',
      {
        'text-white bg-themeColor': color === 'orange',
        'text-themeColor bg-white': color === 'light',
      }, className)}>
      {children}
    </button>
  );
};

export default Button;
