import React from 'react';
import { HeroSection } from './HeroSection/HeroSection';
import { HowItWorksSection } from './HowItWorksSection/HowItWorksSection';
import { ThirdSection } from './ThirdSection/ThirdSection';
import { ReviewsSection } from './ReviewsSection/ReviewsSection';

export const MainPage = () => (
  <main>
    <HeroSection />
    <HowItWorksSection />
    <ThirdSection />
    <ReviewsSection />
  </main>
);
