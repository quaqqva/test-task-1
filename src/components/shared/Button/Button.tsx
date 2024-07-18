import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

type ButtonProps = {
  severity?: 'default' | 'primary' | 'icon-only';
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  severity = 'default',
  children,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    className={`button button_${severity}${props.className ? ` ${props.className}` : ''}`}
  >
    {children}
  </button>
);
