import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './global-styles/styles.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
