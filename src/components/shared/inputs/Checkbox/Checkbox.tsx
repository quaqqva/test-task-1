import React from 'react';
import './Checkbox.scss';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => (
  <input className="checkbox" type="checkbox" {...props} />
);
