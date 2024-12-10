import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import handIcon from '../../../assets/hand.png';
import saman_Pic from '../../../assets/Pic Gray bg.png';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import s from './MainSection.module.scss';

const MainSection = () => {
  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    initial: { x: -50, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={s.content}>
      <motion.div 
        className={s.header}
        variants={textVariants}
      >
        <motion.div 
          className={s.greetingContainer}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className={s.title}>Greetings!</h2>
          <motion.img 
            src={handIcon} 
            className={s.handIcon}
            animate={{ rotate: [0, 20, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>

        <motion.h1 
          className={s.mainTitle}
          variants={textVariants}
        >
          I'M
          <motion.strong 
            className={s.mainName}
            whileHover={{ 
              scale: 1.1,
              color: "var(--txt-secondary)",
              transition: { duration: 0.2 }
            }}
          > 
            Ahmed Elsamman 
          </motion.strong>
        </motion.h1>

        <div className={s.typewriter}>
          <Typewriter
            strings={[
              'Full Stack Developer',
              'Front-End Developer',
              'Back-End Developer',
            ]}
            wrapperClassName={s.typewriterInner}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </motion.div>

      <div className={s.spacer} />

      <motion.div
        variants={imageVariants}
        whileHover={{ scale: 1.05 }}
        className={s.imageWrapper}
      >
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
      </motion.div>
    </section>
  );
};

export default MainSection;
