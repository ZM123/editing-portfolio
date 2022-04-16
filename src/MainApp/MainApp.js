import React from 'react';
import { Routes, Route } from "react-router-dom";
import styles from './MainApp.module.scss';

const MainApp = () => {
  return (
    <div className={styles.mainApp}>
      <div>Header</div>
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
