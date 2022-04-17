import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from "./HeaderLink";
import logo from '../assets/ZM_Logo.svg';
import ResumePDF from '../assets/PPFT5053_A3_resume_Machado_Zal.pdf';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderLink to="/about" label="About" />
      <HeaderLink to="/work" label="Work" />
      <Link to="/" style={{ height: '100%' }}>
        <img src={logo} className={styles.headerLogo} />
      </Link>
      <HeaderLink to="/contact" label="Contact" />
      <HeaderLink href={ResumePDF} target="_blank" label="Resume" />
    </div>
  );
};

export default Header;
