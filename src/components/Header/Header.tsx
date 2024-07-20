import React from 'react';
import { Logo } from './Logo/Logo';
import './Header.scss';

const links = [
  {
    url: '#how-it-works',
    text: 'Как это работает',
  },
  {
    url: '#third-block',
    text: '3-й блок',
  },
  {
    url: '#faq',
    text: 'Вопросы и ответы',
  },
  {
    url: '#form',
    text: 'Форма',
  },
];

export const Header = () => (
  <header className="header">
    <Logo></Logo>
    <nav className="header__navigation">
      <ul className="header__links">
        {links.map(({ url, text }) => (
          <li key={text}>
            <a className="header__link" href={url}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
