import React from 'react';
import manImage from '../../../../assets/images/third-block/man.png';
import truckImage from '../../../../assets/images/third-block/truck.jpg';
import './ThirdBlock.scss';

export const ThirdBlock: React.FC = () => (
  <div id="third-block" className="third-block">
    <div className="third-block__text">
      <h3 className="third-block__heading">
        Круто, ты дошёл до третьего блока
      </h3>
      <p className="third-block__description">
        63% опрошенных пользовались кредитами из-за того, что не могли покрыть
        непредвиденные расходы свыше 15 000 ₽.
        <br />
        <br />
        Доступ к заработанным деньгам помогает отказаться от кредитов и
        экономить деньги на процентах и штрафах.
      </p>
    </div>
    <div className="third-block__images">
      <img
        className="third-block__man-image"
        src={manImage}
        alt="Картинка с человеком"
      />
      <img
        className="third-block__truck-image"
        src={truckImage}
        alt="Картинка грузовика"
      />
    </div>
  </div>
);
