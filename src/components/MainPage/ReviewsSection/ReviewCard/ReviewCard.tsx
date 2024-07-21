import React from 'react';
import './ReviewCard.scss';

export type Review = {
  userName: string;
  image: string;
  city: string;
  review: string;
};

type ReviewCardProps = {
  review: Review;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <div className="review-card">
    <div className="review-card__heading">
      <img
        src={review.image}
        alt={review.userName}
        className="review-card__image"
      />
      <div className="review-card__heading-text">
        <h6 className="review-card__user-name">{review.userName}</h6>
        <p className="review-card__city">{review.city}</p>
      </div>
    </div>
    <p className="review-card__review">{review.review}</p>
  </div>
);
