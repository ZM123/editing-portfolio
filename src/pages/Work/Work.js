import React from 'react';
import PageTemplate from '../PageTemplate';
import styles from './styles.module.scss';

const Work = () => {
  return (
    <PageTemplate>
      <div className={styles.workPage}>
        <div className={styles.workItemOne} />
        <div className={styles.workItemTwo} />
        <div className={styles.workItemThree} />
      </div>
    </PageTemplate>
  );
};

export default Work;
