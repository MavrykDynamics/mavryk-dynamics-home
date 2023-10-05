import React from 'react';

// styles
import sharedStyles from 'styles/shared/container.module.css';
import styles from './sections.module.css';

export const BannerTextSection = () => {
  return (
    <section className={sharedStyles.container}>
      <div className={styles.bannerTextWrapper}>
        <img src="/assets/landing/banner-text.svg" alt="banner-text" />
        <p className={styles.bannerParagraph}>
          Lorem ipsum dolor sit amet consectetur. Nam sapien varius amet
          convallis malesuada rutrum.
        </p>
      </div>
    </section>
  );
};
