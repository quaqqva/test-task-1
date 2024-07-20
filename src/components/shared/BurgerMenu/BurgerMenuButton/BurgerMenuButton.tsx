import React from 'react';
import './BurgerMenuButton.scss';
import { BurgerMenuContext } from '../BurgerMenu';

type BurgerMenuButtonProps = {
  context: BurgerMenuContext;
};

export const BurgerMenuButton = ({ context }: BurgerMenuButtonProps) => (
  <button className="burger-menu-button" onClick={context.open}>
    <div className="burger-menu-button__bar"></div>
    <div className="burger-menu-button__bar"></div>
  </button>
);
