import React from 'react';
import PageTemplate from '../PageTemplate';
import styles from './styles.module.scss';

const About = () => {
  return (
    <PageTemplate>
      <div className={styles.aboutPage}>
        <div className={styles.picturePanel}>
          Pic
        </div>
        <div className={styles.aboutPanel}>
          <div className={styles.title}>About Me</div>
          <div className={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default About;
