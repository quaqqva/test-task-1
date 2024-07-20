import React from 'react';
import './Checkbox.scss';

export const Checkbox = (
  props: React.InputHTMLAttributes<HTMLInputElement>,
) => <input className="checkbox" type="checkbox" {...props} />;
