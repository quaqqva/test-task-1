import { DOMComponent } from '../../shared/dom-component';

export class HowItWorksSectionComponent extends DOMComponent<HTMLElement> {
  public constructor() {
    super({
      tag: 'section',
      classList: ['how-it-works-section'],
      children: [],
    });
  }
}
