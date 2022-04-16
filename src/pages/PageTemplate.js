import React from 'react';
import styles from './styles.module.scss';

const PageTemplate = ({ children }) => {
  return (
    <div className={styles.page}>
      {children}
    </div>
  );
};

export default PageTemplate;
