import React from 'react';

import styles from './card.module.css';

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};
