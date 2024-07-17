import { a } from '../../utils/a.component';
import { DOMComponent } from '../../utils/dom-component';
import { ul } from '../../utils/ul.component';
import { LogoComponent } from './logo/logo.component';

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
          classList: ['header__nav'],
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
