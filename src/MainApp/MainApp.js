import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from '../Header';
import { About, Work, Home, Contact } from '../pages';
import styles from './styles.module.scss';

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

const MainApp = () => {
  return (
    <div className={styles.mainApp}>
      <Routes>
        <Route path="*" element={<MainRoutes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainApp;
