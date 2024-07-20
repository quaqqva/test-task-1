import React from 'react';
import { Header } from './Header/Header';
import { MainPage } from './MainPage/MainPage';
import { Footer } from './Footer/Footer';
import { useMatchMedia } from '../hooks/use-match-media';
import { TABLET_WIDTH } from '../constants/breakpoints';
import {
  MobileNavigationMenu,
  MobileNavigationMenuContext,
} from './MobileNavigationMenu/MobileNavigationMenu';

export const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isTablet = useMatchMedia(
    `(max-width: ${TABLET_WIDTH}px)`,
    window.innerWidth <= TABLET_WIDTH,
  );

  const appContent = (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );

  return isTablet ? (
    <MobileNavigationMenuContext.Provider
      value={{
        isOpen: isMobileMenuOpen,
        close: () => setIsMobileMenuOpen(false),
        open: () => setIsMobileMenuOpen(true),
      }}
    >
      {appContent}
      {isTablet ? <MobileNavigationMenu /> : <></>}
    </MobileNavigationMenuContext.Provider>
  ) : (
    <> {appContent}</>
  );
};
