import { LazyLoadImage } from 'react-lazy-load-image-component';
import handIcon from '../../../assets/hand.png';
import saman_Pic from '../../../assets/Pic Gray bg.png';
import homeMainIcon from '../../../assets/home-main.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import s from './MainSection.module.scss';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <div className={s.greetingContainer}>
          <h2 className={s.title}>Greetings!</h2>
          <img src={handIcon} className={s.handIcon} />
        </div>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> Ahmed Elsamman </strong>
        </h1>

        <div className={s.typewriter}>
          <Typewriter
            strings={[
              'Full Stack Developer',
              'Front-End Developer',
              ' Back-End Developer',
            ]}
            wrapperClassName={s.typewriterInner}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <div className={s.spacer} />

      <LazyLoadImage
        alt="Ahmed Elsamman - Portfolio Image"
        effect="blur"
        src={saman_Pic}
        wrapperClassName={s.homeMainIcon}
        width="396"
        height="400"
        className={s.samanPic}
        loading="lazy"
        placeholderSrc={`${saman_Pic}?w=50`}
        title="Ahmed Elsamman - Portfolio Image"
      />
    </section>
  );
};

export default MainSection;
