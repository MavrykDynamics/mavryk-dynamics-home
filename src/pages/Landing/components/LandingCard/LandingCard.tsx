import React from 'react';

// components
import { Card } from 'components/atoms/Card';
import { Icon } from 'components/atoms/Icon';

// styles
import styles from './landingCard.module.css';

type LandingCardProps = {
  iconId: string;
  headerText: string;
  link: string;
  description: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, link: string) => void;
};

export const LandingCard = ({
  iconId,
  headerText,
  link,
  description,
  onClick,
}: LandingCardProps) => {
  return (
    <Card onClick={(e) => onClick?.(e, link)} hasPointer>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <Icon id={iconId} className={styles.headerIcon} />
          <div className={styles.cardHeaderText}>{headerText}</div>
          {link && (
            <a
              href={link}
              target="_blank"
              className={styles.cardLink}
              rel="noreferrer"
            >
              <Icon id="link-arrow" className={styles.linkIcon} />
            </a>
          )}
        </div>
        <div className={styles.cardDescription}>{description}</div>
      </div>
    </Card>
  );
};
