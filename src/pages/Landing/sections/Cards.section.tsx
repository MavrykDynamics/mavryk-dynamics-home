import React from 'react';

// components
import { LandingCard } from '../components/LandingCard/LandingCard';

// styles
import sharedStyles from 'styles/shared/container.module.css';
import styles from './sections.module.css';

// mocks
import { cardsData } from '../mocks/cards.mock';

export const CardsSection = () => {
  return (
    <section className={sharedStyles.container}>
      <div className={styles.cards}>
        {cardsData.map((card) => (
          <LandingCard
            key={card.iconId}
            iconId={card.iconId}
            link={card.link}
            description={card.description}
            headerText={card.headerText}
          />
        ))}
      </div>
    </section>
  );
};
