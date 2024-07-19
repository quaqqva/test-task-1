import React from 'react';
import { HeroSection } from './HeroSection/HeroSection';
import { HowItWorksSection } from './HowItWorksSection/HowItWorksSection';
import { ReviewsSection } from './ReviewsSection/ReviewsSection';
import { FaqSection } from './FaqSection/FaqSection';
import { TextSection } from './TextSection/TextSection';

export const MainPage = () => (
  <main>
    <HeroSection />
    <HowItWorksSection />
    <ReviewsSection />
    <FaqSection />
    <TextSection />
  </main>
);
