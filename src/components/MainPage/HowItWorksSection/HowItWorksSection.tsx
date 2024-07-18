import React from 'react';
import { StepCard, StepInfo } from './StepCard/StepCard';
import waitingIcon from '../../../assets/images/how-it-works-section/waiting.svg';
import deliveryTruckIcon from '../../../assets/images/how-it-works-section/delivery-truck.svg';
import secureIcon from '../../../assets/images/how-it-works-section/secure.svg';
import moneyBagsIcon from '../../../assets/images/how-it-works-section/money-bags.svg';
import { ThirdBlock } from './ThirdBlock/ThirdBlock';
import './HowItWorksSection.scss';

const steps: StepInfo[] = [
  {
    title: 'Прочитай задание внимательно',
    description: 'Думаю у тебя не займёт это больше двух-трёх минут',
    iconUrl: waitingIcon,
  },
  {
    title: 'Изучи весь макет заранее',
    description:
      'Подумай как это будет работать на разных разрешениях и при скрernote',
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

export const HowItWorksSection = () => (
  <section className="how-it-works-section">
    <h2 className="how-it-works-section__heading">Как это работает</h2>
    <div className="how-it-works-section__steps">
      {steps.map((step) => (
        <StepCard stepInfo={step} key={step.title} />
      ))}
    </div>
    <ThirdBlock />
  </section>
);
