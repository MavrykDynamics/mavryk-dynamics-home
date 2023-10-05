import React from 'react';

// sections
import { Header } from 'layout/Header/Header';
import { BannerTextSection } from './sections/BannerText.section';
import { CardsSection } from './sections/Cards.section';
import { BackgroundSection } from './sections/Background.section';
import { Footer } from 'layout/Footer';
import { Container } from 'pages/Landing/components/Container';

export const LandingPage = () => {
  return (
    <Container>
      <Header />
      <BannerTextSection />
      <BackgroundSection>
        <CardsSection />
        <Footer />
      </BackgroundSection>
    </Container>
  );
};
