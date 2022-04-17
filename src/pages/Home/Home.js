import React from 'react';
import HeaderLink from '../../Header/HeaderLink';
import logo from '../../assets/ZM_Logo.svg';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div />
      <div className={styles.homeNav}>
        <HeaderLink to="/something" label="Something" className={styles.somethingLink} />
        <HeaderLink to="/about" label="About" className={styles.aboutLink} />
        <img src={logo} className={styles.homeLogo} />
        <HeaderLink to="/work" label="Work" className={styles.workLink} />
        <HeaderLink to="/contact" label="Contact" className={styles.contactLink} />
      </div>
      <div />
    </div>
  );
};

export default Home;
