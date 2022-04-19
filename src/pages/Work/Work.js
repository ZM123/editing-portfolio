import React from 'react';
import VFXThumbnail from '../../assets/VFXReel_Thumbnail.png';
import PageTemplate from '../PageTemplate';
import styles from './styles.module.scss';

const WorkLink = ({ href, src, title, description }) => {
  return (
    <a className={styles.workLink} href={href} target="_blank">
      <img src={src} className={styles.workLinkImage} />
      <div className={styles.workLinkTitle}>{title}</div>
      <div className={styles.workLinkDescription}>{description}</div>
    </a>
  );
};

const Work = () => {
  return (
    <PageTemplate>
      <div className={styles.workPage}>
        <WorkLink
          href="https://www.youtube.com/watch?v=WBVafHBFtkg"
          src={VFXThumbnail}
          title="VFX Reel in Adobe After Effects"
          description="A video with samples of effects I have made in Adobe After Effects"
        />
        <WorkLink
          href="https://github.com/ZM123/avid-rename-utility"
          src="https://user-images.githubusercontent.com/3130987/153670574-330ca7f8-f11c-4291-831d-ffb10ac435d3.png"
          title="AVID Shot Renaming Utility"
          description="A utility script to bulk modify shot names in an AVID bin, including find/replace and converting between uppercase and lowercase"
        />
        <div className={styles.workItemThree} />
      </div>
    </PageTemplate>
  );
};

export default Work;
