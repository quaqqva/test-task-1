import { button } from '../utils/button.component';
import { div } from '../utils/div.component';
import { DOMComponent } from '../utils/dom-component';
import { heading } from '../utils/heading.component';
import { p } from '../utils/paragraph.component';
import { HeaderComponent } from './header/header.component';

export class HeroSectionComponent extends DOMComponent<HTMLElement> {
  public constructor() {
    super({
      tag: 'section',
      classList: ['hero-section'],
      children: [
        new HeaderComponent(),
        div({
          classList: ['hero-section__inner'],
          children: [
            heading({
              level: 1,
              classList: ['hero-section__heading'],
              textContent: 'Говорят, никогда не поздно сменить профессию',
            }),
            p({
              classList: ['hero-section__sub-heading'],
              textContent: 'Сделай круто тестовое задание и у тебя получится',
            }),
            button({
              textContent: 'Проще простого!',
              severity: 'secondary',
            }),
          ],
        }),
      ],
    });
  }
}
