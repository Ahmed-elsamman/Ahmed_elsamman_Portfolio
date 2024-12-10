import { motion } from 'framer-motion';
import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import ContactSection from './ContactSection/ContactSection';

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  return (
    <HomeLayout>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={sectionVariants}>
          <MainSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <IntroSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </motion.div>
    </HomeLayout>
  );
};

export default Home;
