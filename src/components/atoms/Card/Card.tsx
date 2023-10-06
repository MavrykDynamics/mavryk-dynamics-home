import React from 'react';
import classNames from 'classnames';

import styles from './card.module.css';

type CardProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  hasPointer?: boolean;
};

export const Card = ({ children, hasPointer = false, onClick }: CardProps) => {
  return (
    <div
      onClick={(e) => onClick?.(e)}
      className={classNames(styles.card, {
        [styles.pointer]: hasPointer,
      })}
    >
      {children}
    </div>
  );
};
