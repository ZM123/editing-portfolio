import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header';
import styles from './styles.module.scss';

const MainApp = () => {
  return (
    <div className={styles.mainApp}>
      <Header />
      <Routes>
        <Route path="/about" element={<div>About</div>} />
        <Route path="/work" element={<div>Work</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </div>
  );
};

export default MainApp;
