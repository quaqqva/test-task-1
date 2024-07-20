import React, { createContext, useContext } from 'react';
import { BurgerMenu, BurgerMenuContext } from '../shared/BurgerMenu/BurgerMenu';
import { Logo } from '../Logo/Logo';
import { NAVIGATION_LINKS } from '../../constants/navigation-links';
import { Button } from '../shared/Button/Button';
import './MobileNavigationMenu.scss';

export const MobileNavigationMenuContext = createContext<BurgerMenuContext>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export const MobileNavigationMenu = () => {
  const context = useContext(MobileNavigationMenuContext);
  return (
    <BurgerMenu context={context}>
      <div className="mobile-navigation">
        <div className="mobile-navigation__heading">
          <Logo variation="dark" />
          <Button
            severity="icon-only"
            className="mobile-navigation__close-button"
            onClick={context.close}
          >
            <i className="fi fi-sr-cross"></i>
          </Button>
        </div>

        <nav>
          <ul className="mobile-navigation__links">
            {NAVIGATION_LINKS.map(({ url, text }, index) => (
              <li key={index}>
                <a
                  href={url}
                  className="mobile-navigation__link mobile-navigation-link"
                  onClick={context.close}
                >
                  {text}
                  <span className="mobile-navigation-link__icon">
                    <i className="fr fi-sr-angle-small-right"></i>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </BurgerMenu>
  );
};
