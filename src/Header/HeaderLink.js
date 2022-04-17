import React from 'react';
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

const HeaderLink = ({ label, className, ...otherProps }) => {
  const Tag = otherProps.to ? Link : 'a';
  return (
    <div className={`${styles.headerLink} ${className}`}>
      <Tag className={styles.text} {...otherProps}>
        {label}
      </Tag>
    </div>
  );
};

export default HeaderLink;
