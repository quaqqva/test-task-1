import { DOMComponent } from '../shared/dom-component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HowItWorksSectionComponent } from './how-it-works-section/how-it-works-section.component';

export class MainPageComponent extends DOMComponent<HTMLElement> {
  public constructor() {
    super({
      tag: 'main',
      children: [new HeroSectionComponent(), new HowItWorksSectionComponent()],
    });
  }
}
