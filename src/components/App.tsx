import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Header } from './Header/Header';
import { MainPage } from './MainPage/MainPage';
import { Footer } from './Footer/Footer';
import { useMatchMedia } from '../utils/use-match-media';
import { TABLET_WIDTH } from '../constants/breakpoints';
import {
  MobileNavigationMenu,
  MobileNavigationMenuContext,
} from './MobileNavigationMenu/MobileNavigationMenu';

export const App: React.FC = () => {
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
      <ToastContainer />
    </>
  );

  return isTablet ? (
    <MobileNavigationMenuContext.Provider
      value={{
        isOpen: isMobileMenuOpen,
        close: () => {
          document.body.style.overflow = 'auto';
          setIsMobileMenuOpen(false);
        },
        open: () => {
          setIsMobileMenuOpen(true);
          document.body.style.overflow = 'hidden';
        },
      }}
    >
      {appContent}
      {isTablet ? <MobileNavigationMenu /> : <></>}
    </MobileNavigationMenuContext.Provider>
  ) : (
    <> {appContent}</>
  );
};
