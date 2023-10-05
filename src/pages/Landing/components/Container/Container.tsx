import React from 'react';

// styles
import styles from './container.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.containerBlock}>{children}</div>;
};
