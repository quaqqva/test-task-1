import React from 'react';
import { BurgerMenuContext } from '../BurgerMenu';
import './BurgerMenuButton.scss';

type BurgerMenuButtonProps = {
  context: BurgerMenuContext;
};

export const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({
  context,
}) => (
  <button className="burger-menu-button" onClick={context.open}>
    <div className="burger-menu-button__bar"></div>
    <div className="burger-menu-button__bar"></div>
  </button>
);
