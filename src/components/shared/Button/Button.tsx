import React from 'react';
import './Button.scss';

type ButtonProps = {
  severity?: 'default' | 'primary';
  children?: React.ReactNode;
};

export const Button = ({ severity = 'default', children }: ButtonProps) => (
  <button className={`button button_${severity}`}>{children}</button>
);
