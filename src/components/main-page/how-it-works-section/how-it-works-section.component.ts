import { DOMComponent } from '../../shared/dom-component';
import { heading } from '../../shared/heading.component';
import { StepCardComponent, StepInfo } from './step-card/step-card.component';
import waitingIcon from '../../../assets/images/how-it-works-section/waiting.svg';
import deliveryTruckIcon from '../../../assets/images/how-it-works-section/delivery-truck.svg';
import secureIcon from '../../../assets/images/how-it-works-section/secure.svg';
import moneyBagsIcon from '../../../assets/images/how-it-works-section/money-bags.svg';
import { div } from '../../shared/div.component';

export class HowItWorksSectionComponent extends DOMComponent<HTMLElement> {
  private static STEPS: StepInfo[] = [
    {
      title: 'Прочитай задание внимательно',
      description: 'Думаю у тебя не займёт это больше двух-трёх минут',
      iconUrl: waitingIcon,
    },
    {
      title: 'Изучи весь макет заранее',
      description:
        'Подумай как это будет работать на разных разрешениях и при скролее',
      iconUrl: deliveryTruckIcon,
    },
    {
      title: 'Сделай хорошо',
      description: 'Чтобы мы могли доверить тебе подобные задачи в будущем',
      iconUrl: secureIcon,
    },
    {
      title: 'Получи предложение',
      description:
        'Ну тут все просто, не я придумал правила, но думаю так и будет))',
      iconUrl: moneyBagsIcon,
    },
  ];

  public constructor() {
    super({
      tag: 'section',
      classList: ['how-it-works-section'],
      children: [
        heading({
          level: 2,
          textContent: 'Как это работает',
          classList: ['how-it-works-section__heading'],
        }),
        div({
          classList: ['how-it-works-section__steps'],
          children: HowItWorksSectionComponent.STEPS.map(
            (step) => new StepCardComponent(step),
          ),
        }),
      ],
    });
  }
}
