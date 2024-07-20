import React, { useContext } from 'react';
import { Logo } from '../Logo/Logo';
import { NAVIGATION_LINKS } from '../../constants/navigation-links';
import { useMatchMedia } from '../../utils/use-match-media';
import { TABLET_WIDTH } from '../../constants/breakpoints';
import { BurgerMenuButton } from '../shared/BurgerMenu/BurgerMenuButton/BurgerMenuButton';
import { MobileNavigationMenuContext } from '../MobileNavigationMenu/MobileNavigationMenu';
import './Header.scss';

export const Header = () => {
  const isTablet = useMatchMedia(
    `(max-width: ${TABLET_WIDTH}px)`,
    window.innerWidth <= TABLET_WIDTH,
  );
  const mobileMenuContext = useContext(MobileNavigationMenuContext);

  return (
    <header className="header">
      <Logo variation="light"></Logo>
      {isTablet ? (
        <BurgerMenuButton context={mobileMenuContext} />
      ) : (
        <nav className="header__navigation">
          <ul className="header__links">
            {NAVIGATION_LINKS.map(({ url, text }) => (
              <li key={text}>
                <a className="header__link" href={url}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
