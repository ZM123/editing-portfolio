import React from 'react';
import HeaderLink from '../../Header/HeaderLink';
import logo from '../../assets/ZM_Logo.svg';
import ResumePDF from '../../assets/PPFT5053_A3_resume_Machado_Zal.pdf';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div />
      <div className={styles.homeNav}>
        <HeaderLink to="/about" label="About" className={styles.aboutLink} />
        <HeaderLink to="/work" label="Work" className={styles.workLink} />
        <img src={logo} className={styles.homeLogo} />
        <HeaderLink to="/contact" label="Contact" className={styles.contactLink} />
        <HeaderLink href={ResumePDF} target="_blank" label="Resume" className={styles.resumeLink} />
      </div>
      <div />
    </div>
  );
};

export default Home;
