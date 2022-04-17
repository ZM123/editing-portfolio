import React from 'react';
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

const HeaderLink = ({ label, className, ...otherProps }) => {
  return (
    <div className={`${styles.headerLink} ${className}`}>
      <Link className={styles.text} {...otherProps}>
        {label}
      </Link>
    </div>
  );
};

export default HeaderLink;
