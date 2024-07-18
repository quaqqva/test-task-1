import React from 'react';
import { HeroSection } from './HeroSection/HeroSection';
import { HowItWorksSection } from './HowItWorksSection/HowItWorksSection';
import { ThirdSection } from './ThirdSection/ThirdSection';

export const MainPage = () => (
  <main>
    <HeroSection></HeroSection>
    <HowItWorksSection></HowItWorksSection>
    <ThirdSection></ThirdSection>
  </main>
);
