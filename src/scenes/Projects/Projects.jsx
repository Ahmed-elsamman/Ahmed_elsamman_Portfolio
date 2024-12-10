import s from './Projects.module.scss';
import projects from '../../data/projects';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ProjectCard from './ProjectCard/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <BaseLayout>
      <motion.div 
        className={s.content}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className={s.title}
          variants={headerVariants}
        >
          Recent <strong className={s.purple}>Projects</strong>
        </motion.h1>
        
        <motion.p 
          className={s.subtitle}
          variants={headerVariants}
        >
          A curated collection of my technical adventures and creative
          experiments. Each project represents a unique blend of code,
          design, and innovation.
          <br />
          Take a look.
        </motion.p>

        <motion.ul className={s.projects}>
          {projects.map((props, index) => (
            <ProjectCard 
              key={props.id} 
              {...props} 
              index={index}
            />
          ))}
        </motion.ul>
      </motion.div>
    </BaseLayout>
  );
};

export default Projects;
