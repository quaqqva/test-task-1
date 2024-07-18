import React from 'react';
import manImage from '../../../assets/images/third-section/man.png';
import truckImage from '../../../assets/images/third-section/truck.jpg';
import './ThirdSection.scss';

export const ThirdSection = () => (
  <section className="third-section">
    <div className="third-section__text">
      <h3 className="third-section__heading">
        Круто, ты дошёл до третьего блока
      </h3>
      <p className="third-section__description">
        63% опрошенных пользовались кредитами из-за того, что не могли покрыть
        непредвиденные расходы свыше 15 000 ₽.
        <br />
        <br />
        Доступ к заработанным деньгам помогает отказаться от кредитов и
        экономить деньги на процентах и штрафах.
      </p>
    </div>
    <div className="third-section__images">
      <img
        className="third-section__man-image"
        src={manImage}
        alt="Картинка с человеком"
      />
      <img
        className="third-section__truck-image"
        src={truckImage}
        alt="Картинка грузовика"
      />
    </div>
  </section>
);
