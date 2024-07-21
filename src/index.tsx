import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './global-styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';

const entry = (
  <StrictMode>
    <App></App>
  </StrictMode>
);

createRoot(document.getElementById('root') as HTMLElement).render(entry);
