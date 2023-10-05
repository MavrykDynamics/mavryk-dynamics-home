import React from 'react';

// styles
import styles from './sections.module.css';

type BackgroundSectionProps = {
  children: React.ReactNode;
};

export const BackgroundSection = ({ children }: BackgroundSectionProps) => {
  return <section className={styles.landingBackground}>{children}</section>;
};
