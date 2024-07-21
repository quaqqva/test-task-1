import React from 'react';
import './Logo.scss';

export type LogoProps = {
  variation: 'light' | 'dark';
};

export const Logo: React.FC<LogoProps> = ({ variation }) => (
  <a className={`logo logo_${variation}`} href="">
    <div className="logo__inner">
      <div className="logo__circle"></div>
      <div className="logo__circle"></div>
    </div>
    <h5 className="logo__heading">testLab</h5>
  </a>
);
