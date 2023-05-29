import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cn from 'clsx';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'orange' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, className, size, color, ...rest }) => {
  return (
    <button {...rest} className={cn('rounded-3xl font-medium shadow-md px-8 py-2 hover:shadow-lg transition-all duration-300',
      {
        'text-white bg-themeColor': color === 'orange',
        'text-themeColor bg-white': color === 'light',
        'text-sm': size === 'sm',
      }, className)}>
      {children}
    </button>
  );
};

export default Button;
