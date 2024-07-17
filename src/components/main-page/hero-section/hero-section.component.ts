import { button } from '../../shared/button/button.component';
import { div } from '../../shared/div.component';
import { DOMComponent } from '../../shared/dom-component';
import { heading } from '../../shared/heading.component';
import { p } from '../../shared/paragraph.component';
import './hero-section.component.scss';

export class HeroSectionComponent extends DOMComponent<HTMLElement> {
  public constructor() {
    super({
      tag: 'section',
      classList: ['hero-section'],
      children: [
        div({
          classList: ['hero-section__inner'],
          children: [
            heading({
              level: 1,
              classList: ['hero-section__heading'],
              textContent: 'Говорят, никогда не поздно сменить профессию',
            }),
            p({
              classList: ['hero-section__subheading'],
              textContent: 'Сделай круто тестовое задание и у тебя получится',
            }),
            button({
              textContent: 'Проще простого!',
              classList: ['hero-section__button'],
            }),
          ],
        }),
      ],
    });
  }
}
