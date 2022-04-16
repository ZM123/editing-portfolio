import React from 'react';
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

const HeaderLink = ({ label, ...otherProps }) => {
  return (
    <div className={styles.headerLink}>
      <Link className={styles.text} {...otherProps}>
        {label}
      </Link>
    </div>
  );
};

export default HeaderLink;
