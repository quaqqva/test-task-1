import { HeroSectionComponent } from './hero-section/hero-section.component';
import { DOMComponent } from './shared/dom-component';

export class AppComponent extends DOMComponent<HTMLElement> {
  public constructor() {
    super({
      tag: 'div',
      classList: ['app'],
      children: [new HeroSectionComponent()],
    });
  }
}
