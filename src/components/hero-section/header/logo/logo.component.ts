import { div } from '../../../utils/div.component';
import { DOMComponent } from '../../../utils/dom-component';
import { heading } from '../../../utils/heading.component';

export class LogoComponent extends DOMComponent<HTMLLinkElement> {
  public constructor() {
    super({
      tag: 'a',
      classList: ['logo'],
      attributes: {
        href: '',
      },
      children: [
        div({ classList: ['logo__first-circle'] }),
        div({ classList: ['logo__second-circle'] }),
        heading({
          level: 5,
          textContent: 'testLab',
          classList: ['logo__heading'],
        }),
      ],
    });
  }
}
