import { DOMComponent } from '../../../shared/dom-component';
import { heading } from '../../../shared/heading.component';
import { image } from '../../../shared/image.component';
import { p } from '../../../shared/paragraph.component';

export type StepInfo = {
  title: string;
  description: string;
  iconUrl: string;
};

export class StepCardComponent extends DOMComponent<HTMLDivElement> {
  public constructor(stepInfo: StepInfo) {
    super({
      tag: 'div',
      classList: ['step-card'],
      children: [
        image({
          src: stepInfo.iconUrl,
          alt: stepInfo.title,
          classList: ['step-card__icon'],
        }),
        heading({
          level: 6,
          textContent: stepInfo.title,
          classList: ['step-card__title'],
        }),
        p({
          textContent: stepInfo.description,
          classList: ['step-card__description'],
        }),
      ],
    });
  }
}
