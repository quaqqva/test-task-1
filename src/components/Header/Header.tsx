import React from 'react';
import { Logo } from './Logo/Logo';
import './Header.scss';

const links = [
  {
    url: '#',
    text: 'Как это работает',
  },
  {
    url: '#',
    text: '3-й блок',
  },
  {
    url: '#',
    text: 'Вопросы и ответы',
  },
  {
    url: '#',
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
