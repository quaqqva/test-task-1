import React from 'react';
import firstReviewerPicture from '../../../assets/images/reviews-section/reviewer-1.png';
import secondReviewerPicture from '../../../assets/images/reviews-section/reviewer-2.png';
import thirdReviewerPicture from '../../../assets/images/reviews-section/reviewer-3.png';
import { Review, ReviewCard } from './ReviewCard/ReviewCard';
import './ReviewsSection.scss';
import { Slider, SliderBreakpoint } from '../../shared/Slider/Slider';

const reviewsBase: Review[] = [
  {
    userName: 'Константинов Михаил Павлович',
    image: firstReviewerPicture,
    city: 'Санкт-Петербург',
    review:
      'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ',
  },
  {
    userName: 'Иван Иванов',
    image: secondReviewerPicture,
    city: 'Санкт-Петербург',
    review:
      'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
  },
  {
    userName: 'Артем Корнилов',
    image: thirdReviewerPicture,
    city: 'Самара',
    review:
      'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
  },
];

const mockReviews = new Array(5)
  .fill(null)
  .map(() =>
    [...reviewsBase].map((review) => (
      <ReviewCard key={review.userName} review={review} />
    )),
  );

const slideBreakpoints: SliderBreakpoint[] = [
  {
    minWidth: 1250,
    sliderWidth: 1215,
    viewportSidePadding: 30,
    displaySideButtons: true,
    itemsPerSlide: 3,
  },
  {
    minWidth: 768,
    sliderWidth: 745,
    viewportSidePadding: 15,
    displaySideButtons: false,
    itemsPerSlide: 2,
  },
  {
    minWidth: 375,
    sliderWidth: 361,
    viewportSidePadding: 10,
    displaySideButtons: false,
    itemsPerSlide: 1,
  },
  {
    minWidth: 0,
    sliderWidth: 298,
    viewportSidePadding: 5,
    displaySideButtons: false,
    itemsPerSlide: 1,
  },
];

export const ReviewsSection = () => (
  <section className="reviews-section">
    <h2 className="reviews-section__heading">Отзывы</h2>
    <Slider slides={mockReviews} breakpoints={slideBreakpoints}></Slider>
  </section>
);
