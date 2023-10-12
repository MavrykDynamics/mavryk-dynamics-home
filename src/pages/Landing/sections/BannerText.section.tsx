import React from 'react';

// consts
import { DESKTOP, MOBILE, MOBILE_VIEW } from 'consts/media.consts';

// hooks
import { useWindowDimensions } from 'hooks/useWindowDimensions';

// styles
import sharedStyles from 'styles/shared/container.module.css';
import styles from './sections.module.css';

export const BannerTextSection = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= MOBILE_VIEW;

  const iconType = isMobile ? MOBILE : DESKTOP;

  return (
    <section className={sharedStyles.container}>
      <div className={styles.bannerTextWrapper}>
        <img
          src={`/assets/landing/banner-text-${iconType}.svg`}
          alt="banner-text"
        />
        <p className={styles.bannerParagraph}>
          Where visionary pioneers spearhead the vanguard of web3 innovation
        </p>
      </div>
    </section>
  );
};
