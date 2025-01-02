import React from 'react';
import classNames from 'classnames';

// components
import { Icon } from 'components/atoms/Icon';

// styles
import sharedStyles from 'styles/shared/container.module.css';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer
      className={classNames(sharedStyles.container, styles.footerContainer)}
    >
      <div className={styles.footer}>
        <Icon id="copyright" className={styles.footerIcon} />
        <div className={styles.footerText}>2025 Mavryk Dynamics</div>
      </div>
    </footer>
  );
};
