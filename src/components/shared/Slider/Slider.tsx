import React, { useMemo, useState } from 'react';
import './Slider.scss';
import { Button } from '../Button/Button';
import { SwipeDirection, swipeListen } from '../../../utils/swipe-listen';
import { useWindowSize } from '../../../utils/use-window-size';

export type SliderBreakpoint = {
  minWidth: number;
  sliderWidth: number;
  viewportSidePadding: number;
  displaySideButtons: boolean;
  itemsPerSlide: number;
};

type SliderProps = {
  slides: JSX.Element[][];
  breakpoints: SliderBreakpoint[];
  isCyclic?: boolean;
};

export const Slider = ({
  isCyclic = false,
  breakpoints,
  slides,
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(!isCyclic);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  const sortedBreakPoints = useMemo(
    () => breakpoints.sort((a, b) => b.minWidth - a.minWidth),
    [breakpoints],
  );

  const { width: windowWidth } = useWindowSize();

  const currentBreakpoint = sortedBreakPoints.find(
    (breakpoint) => windowWidth >= breakpoint.minWidth,
  );
  if (!currentBreakpoint) throw Error('No matching slider breakpoint found');

  const switchToSlide = (slideIndex: number) => {
    const newSlideIndex = isCyclic
      ? ((slideIndex % slides.length) + slides.length) % slides.length
      : Math.max(Math.min(slideIndex, slides.length - 1), 0);
    setCurrentSlide(newSlideIndex);
    setLeftButtonDisabled(newSlideIndex === 0 && !isCyclic);
    setRightButtonDisabled(newSlideIndex === slides.length - 1 && !isCyclic);
  };

  const onSwipe = (direction: SwipeDirection) => {
    if (direction === 'left') switchToSlide(currentSlide + 1);
    if (direction === 'right') switchToSlide(currentSlide - 1);
  };

  return (
    <div className="slider" style={{ width: currentBreakpoint.sliderWidth }}>
      <div
        className="slider__inner"
        style={{ gap: 32 - currentBreakpoint.viewportSidePadding }}
      >
        {currentBreakpoint.displaySideButtons ? (
          <Button
            severity="icon-only"
            disabled={leftButtonDisabled}
            onClick={() => switchToSlide(currentSlide - 1)}
          >
            <i className="fi fi-sr-angle-left"></i>
          </Button>
        ) : (
          <></>
        )}

        <div className="slider__viewport" {...swipeListen(onSwipe)}>
          <div
            className="slider__slides"
            style={{
              translate: `calc(-1 * ${currentSlide * 100}% - ${currentSlide} * var(--slide-gap))`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="slider__slide"
                style={{
                  paddingLeft: currentBreakpoint.viewportSidePadding,
                  paddingRight: currentBreakpoint.viewportSidePadding,
                }}
              >
                {slide.slice(0, currentBreakpoint.itemsPerSlide)}
              </div>
            ))}
          </div>
        </div>
        {currentBreakpoint.displaySideButtons ? (
          <Button
            severity="icon-only"
            disabled={rightButtonDisabled}
            onClick={() => switchToSlide(currentSlide + 1)}
          >
            <i className="fi fi-sr-angle-right"></i>
          </Button>
        ) : (
          <></>
        )}
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
