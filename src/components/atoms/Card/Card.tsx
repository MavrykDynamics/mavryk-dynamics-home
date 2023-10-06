import React from 'react';

import styles from './card.module.css';

type CardProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  link?: string;
};

export const Card = ({ children, link, onClick }: CardProps) => {
  return (
    <a className={styles.card} href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
