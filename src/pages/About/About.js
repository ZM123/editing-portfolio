import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../PageTemplate';
import ProfilePic from '../../assets/Profile_pic.jpg';
import styles from './styles.module.scss';

const About = () => {
  return (
    <PageTemplate>
      <div className={styles.aboutPage}>
        <div className={styles.picturePanel}>
          <div className={styles.profilePicContainer}>
            <img src={ProfilePic} className={styles.profilePic} />
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.aboutPanel}>
          <div className={styles.title}>About Me</div>
          <div className={styles.bodyText}>
            {`Hi there!

I'm a former software developer looking to transition into the world of film and television production. While studying at Humber College, I've developed an affinity for the work of the assistant editor and would love to get a chance to use my skills to help produce the great projects of the future that will excite and inspire others the way so many films of the past have inspired me.

If you're looking for someone who is eager to assist and learn, with several years of real-world work experience in a variety of companies along with proficiency in a wide range of software suites and programming languages, feel free to `}
            <Link to="/contact">contact me</Link>
            {` and send me a message!

I have working knowledge in the following programs:
    - AVID Media Composer
    - DaVinci Resolve
    - Adobe Creative Cloud Suite (After Effects, Premiere Pro, Illustrator, Photoshop)
    - AVID Pro Tools
    - Autodesk Maya
    - Nuke
    - Several scripting and programming languages, including Python and JavaScript`}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default About;
