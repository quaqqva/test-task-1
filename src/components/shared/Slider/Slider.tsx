import React, { useState } from 'react';
import './Slider.scss';
import { Button } from '../Button/Button';

type SliderProps = {
  slides: JSX.Element[][];
  isCyclic?: boolean;
};

export const Slider = ({ isCyclic = false, slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(!isCyclic);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  const switchToSlide = (slideIndex: number) => {
    const newSlideIndex =
      ((slideIndex % slides.length) + slides.length) % slides.length;
    setCurrentSlide(newSlideIndex);
    setLeftButtonDisabled(newSlideIndex === 0 && !isCyclic);
    setRightButtonDisabled(newSlideIndex === slides.length - 1 && !isCyclic);
  };

  return (
    <div className="slider">
      <div className="slider__inner">
        <Button
          severity="icon-only"
          disabled={leftButtonDisabled}
          onClick={() => switchToSlide(currentSlide - 1)}
        >
          <i className="fi fi-sr-angle-left"></i>
        </Button>
        <div className="slider__viewport">
          <div
            className="slider__slides"
            style={{
              translate: `calc(-1 * ${currentSlide * 100}% - ${currentSlide} * var(--slide-gap))`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slider__slide">
                {slide}
              </div>
            ))}
          </div>
        </div>
        <Button
          severity="icon-only"
          disabled={rightButtonDisabled}
          onClick={() => switchToSlide(currentSlide + 1)}
        >
          <i className="fi fi-sr-angle-right"></i>
        </Button>
      </div>
      <div className="slider__pagination">
        {slides.map((_, index) => (
          <Button
            key={index}
            className={`slider__pagination-button ${index === currentSlide ? 'slider__pagination-button_active' : ''}`}
            onClick={() => switchToSlide(index)}
          ></Button>
        ))}
      </div>
    </div>
  );
};
