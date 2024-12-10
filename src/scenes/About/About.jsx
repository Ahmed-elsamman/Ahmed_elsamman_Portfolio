import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import Experience from './Experience/Experience';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <BaseLayout>
      <motion.div 
        className={s.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={s.about}>
          <motion.div 
            className={s.aboutDescription}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className={s.title}>
              Learn More <b className={s.purple}>About Me</b>
            </h1>
            <AboutTextCard />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className={s.skills}>
            Professional <b className={s.purple}>Experience</b>
          </h2>
          <Experience />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className={s.skills}>
            Technical <b className={s.purple}>Skills</b>
          </h2>
          <TechSkills />
        </motion.div>
      </motion.div>
    </BaseLayout>
  );
};

export default About;
