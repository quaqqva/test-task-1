import React from 'react';
import './TextSection.scss';

const description1 =
  'Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах';
const description2 =
  'Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах';

const title = 'Опрошенных пользовались микрокредитами';

const textBlocks = new Array(4).fill(null).map((_, index) => (
  <div key={index} className="text-section__text-block">
    <h5 className="text-section__title">{title}</h5>
    <p className="text-section__description">
      {index === 0 || index === 3 ? description1 : description2}
    </p>
  </div>
));

export const TextSection = () => (
  <section className="text-section">{textBlocks}</section>
);