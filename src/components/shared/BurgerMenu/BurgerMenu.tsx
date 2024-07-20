import React from 'react';
import './BurgerMenu.scss';

export type BurgerMenuContext = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

type BurgerMenuProps = {
  context: BurgerMenuContext;
  children: React.ReactNode;
};

export const BurgerMenu = ({ context, children }: BurgerMenuProps) => (
  <div className={`burger-menu ${context.isOpen ? 'burger-menu_open' : ''}`}>
    <div className="burger-menu__background" onClick={context.close}></div>
    <div className="burger-menu__inner">
      <button
        className="burger-menu__close-button"
        onClick={context.close}
      ></button>
      {children}
    </div>
  </div>
);
