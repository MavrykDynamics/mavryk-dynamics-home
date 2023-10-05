import React from 'react';

// components
import { Icon } from 'components/atoms/Icon/Icon';

// hooks
import { useWindowDimensions } from 'hooks/useWindowDimensions';

// consts
import { DESKTOP, MOBILE, MOBILE_VIEW } from 'consts/media.consts';

// styles
import sharedStyles from 'styles/shared/container.module.css';
import styles from './header.module.css';

export const Header = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= MOBILE_VIEW;

  const iconType = isMobile ? MOBILE : DESKTOP;

  return (
    <header className={sharedStyles.container}>
      <div className={styles.header}>
        <Icon id={`mav-logo-${iconType}`} className={styles.logo} />
        <Icon id={`mav-logo-text-${iconType}`} className={styles.logoText} />
      </div>
    </header>
  );
};
