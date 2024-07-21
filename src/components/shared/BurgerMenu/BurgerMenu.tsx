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

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  context,
  children,
}) => (
  <div className={`burger-menu ${context.isOpen ? 'burger-menu_open' : ''}`}>
    <div className="burger-menu__background" onClick={context.close}></div>
    <div className="burger-menu__inner">{children}</div>
  </div>
);
