import React, { createContext, useContext } from 'react';
import { BurgerMenu, BurgerMenuContext } from '../shared/BurgerMenu/BurgerMenu';
import { Logo } from '../Logo/Logo';
import { NAVIGATION_LINKS } from '../../constants/navigation-links';
import './MobileNavigationMenu.scss';

export const MobileNavigationMenuContext = createContext<BurgerMenuContext>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export const MobileNavigationMenu = () => (
  <BurgerMenu context={useContext(MobileNavigationMenuContext)}>
    <div className="mobile-navigation">
      <Logo variation="dark" />
      <nav>
        <ul className="mobile-navigation__links">
          {NAVIGATION_LINKS.map(({ url, text }, index) => (
            <li key={index}>
              <a href={url} className="mobile-navigation__link">
                <span className="mobile-navigation__link-text">{text}</span>
                <i className="fr fi-sr-angle-small-right"></i>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </BurgerMenu>
);
