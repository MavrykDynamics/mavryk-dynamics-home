import React from 'react';

// components
import { Icon } from 'components/atoms/Icon/Icon';

// styles
import sharedStyles from 'styles/shared/container.module.css';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={sharedStyles.container}>
      <div className={styles.header}>
        <Icon id="mav-logo-large" className={styles.logo} />
        <Icon id="mav-logo-text-large" className={styles.logoText} />
      </div>
    </header>
  );
};
