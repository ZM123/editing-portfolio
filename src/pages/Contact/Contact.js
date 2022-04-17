import React from 'react';
import Resume from '../../assets/resume.svg';
import ResumePDF from '../../assets/PPFT5053_A3_resume_Machado_Zal.pdf';
import Mail from '../../assets/mail.svg';
import Phone from '../../assets/phone.svg';
import LinkedIn from '../../assets/linkedin.svg';
import PageTemplate from '../PageTemplate';
import styles from './styles.module.scss';

const ContactLink = ({ icon, label, to, ...otherProps }) => {
  return (
    <a href={to} className={styles.contactLink} {...otherProps}>
      <img src={icon} className={styles.linkIcon} />
      {label}
    </a>
  );
};

const Contact = () => {
  return (
    <PageTemplate>
      <div className={styles.contactPage}>
        <div />
        <div className={styles.contactMeSection}>
          Contact Me
          <div className={styles.contactLinks}>
            <ContactLink icon={Resume} label="Resume" to={ResumePDF} target="_blank" />
            <ContactLink icon={Mail} label="zalmachado@gmail.com" to="mailto:zalmachado@gmail.com" />
            <ContactLink icon={Phone} label="647-232-5679" to="tel:+16472325679" />
            <ContactLink icon={LinkedIn} label="linkedin.com/zal-machado" to="https://www.linkedin.com/in/zal-machado/" target="_blank" />
          </div>
        </div>
        <div />
      </div>
    </PageTemplate>
  );
};

export default Contact;
