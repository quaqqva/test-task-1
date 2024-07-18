import React from 'react';
import './StepCard.scss';

export type StepInfo = {
  title: string;
  description: string;
  iconUrl: string;
};

type StepCardProps = {
  stepInfo: StepInfo;
};

export const StepCard = ({ stepInfo }: StepCardProps) => (
  <div className="step-card">
    <img
      src={stepInfo.iconUrl}
      alt={stepInfo.title}
      className="step-card__icon"
    />
    <div className="step-card__text">
      <h6 className="step-card__title">{stepInfo.title}</h6>
      <p className="step-card__description">{stepInfo.description}</p>
    </div>
  </div>
);
