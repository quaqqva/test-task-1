import { div } from '../../shared/div.component';
import { DOMComponent } from '../../shared/dom-component';
import { heading } from '../../shared/heading.component';
import './logo.component.scss';

export class LogoComponent extends DOMComponent<HTMLLinkElement> {
  public constructor() {
    super({
      tag: 'a',
      classList: ['logo'],
      attributes: {
        href: '',
      },
      children: [
        div({
          classList: ['logo__inner'],
          children: [
            div({ classList: ['logo__circle'] }),
            div({ classList: ['logo__circle'] }),
          ],
        }),
        heading({
          level: 5,
          textContent: 'testLab',
          classList: ['logo__heading'],
        }),
      ],
    });
  }
}
