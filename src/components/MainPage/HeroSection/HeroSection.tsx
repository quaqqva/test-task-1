import React from 'react';
import { Button } from '../../shared/Button/Button';
import './HeroSection.scss';

export const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-section__inner">
      <h1 className="hero-section__heading">
        Говорят, никогда не поздно сменить профессию
      </h1>
      <p className="hero-section__subheading">
        Сделай круто тестовое задание и у тебя получится
      </p>
      <Button>Проще простого!</Button>
    </div>
  </section>
);
