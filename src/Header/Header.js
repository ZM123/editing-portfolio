import React from 'react';
import HeaderLink from "./HeaderLink";
import logo from '../ZM_Logo.svg';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderLink to="/" label="Home" />
      <HeaderLink to="/about" label="About" />
      <img src={logo} className={styles.headerLogo} />
      <HeaderLink to="/work" label="Work" />
      <HeaderLink to="/contact" label="Contact" />
    </div>
  );
};

export default Header;
