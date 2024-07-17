import { a } from '../shared/a.component';
import { DOMComponent } from '../shared/dom-component';
import { ul } from '../shared/ul.component';
import { LogoComponent } from './logo/logo.component';
import './header.component.scss';

export class HeaderComponent extends DOMComponent<HTMLElement> {
  public constructor() {
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

    super({
      tag: 'header',
      classList: ['header'],
      children: [
        new LogoComponent(),
        new DOMComponent<HTMLElement>({
          tag: 'nav',
          classList: ['header__navigation'],
          children: [
            ul({
              classList: ['header__links'],
              children: links.map(({ url, text }) => {
                return a({
                  url,
                  textContent: text,
                  classList: ['header__link'],
                });
              }),
            }),
          ],
        }),
      ],
    });
  }
}
