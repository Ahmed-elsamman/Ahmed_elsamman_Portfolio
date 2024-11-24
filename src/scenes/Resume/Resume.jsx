import { useRef } from 'react';
import DownloadIcon from '../../assets/download.svg?react';
import FilesIcon from '../../assets/resume-files.svg?react';
import Button from '../../components/UIElements/Button/Button';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './Resume.module.scss';
import resumeImage from '../../assets/Samman_cv.jpg';
import resumePDF from '../../../public/Ahmed_Elsamman_Software_Engineer.pdf';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Resume = () => {
  const createSparkles = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 12; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = s.sparkle;

      const angle = (Math.PI * 2 * i) / 12;
      const velocity = 100 + Math.random() * 50;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;

      sparkle.style.setProperty('--tx', `${tx}px`);
      sparkle.style.setProperty('--ty', `${ty}px`);
      sparkle.style.left = `${centerX}px`;
      sparkle.style.top = `${centerY}px`;

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 800);
    }

    button.classList.add(s.downloading);
    setTimeout(() => button.classList.remove(s.downloading), 800);
  };

  const handleDownload = (e) => {
    createSparkles(e);
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Ahmed_Elsamman_Software_Engineer_Resume.pdf';
    setTimeout(() => link.click(), 300);
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <button
          style={{ margin: ' 1rem auto', width: '15rem' }}
          className={`primary ${s.downloadButton}`}
          onClick={handleDownload}
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </button>

        <div className={s.resumeImageWrapper}>
          <LazyLoadImage
            alt="resume-preview"
            effect="blur"
            src={resumeImage}
            className={s.resumeImage}
          />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
