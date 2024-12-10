import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TechSkills.module.scss';
import ErrorBoundary from '../../../components/ErrorBoundary/ErrorBoundary';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';

import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { DiNodejs } from '@react-icons/all-files/di/DiNodejs';
import { DiMongodb } from '@react-icons/all-files/di/DiMongodb';
import { SiAngular } from '@react-icons/all-files/si/SiAngular';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import { SiSass } from '@react-icons/all-files/si/SiSass';
import { SiSocketdotio } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiMui } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiVercel } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiGitlab } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
const TechSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools' }
  ];

  const skills = [
    // نفس مصفوفة المهارات الموجودة مع إضافة خاصية category
    { icon: <SiNextDotJs />, name: 'Next.js', category: 'frontend' },
    { icon: <DiReact />, name: 'React', category: 'frontend' },
    { icon: <SiAngular />, name: 'Angular', category: 'frontend' },
    { icon: <SiTypescript />, name: 'TypeScript', category: 'frontend'  },
    { icon: <DiJavascript1 />, name: 'JavaScript', category: 'frontend'  },
    { icon: <SiRedux />, name: 'Redux', category: 'frontend'  },

    { icon: <SiMui />, name: 'Material UI' , category: 'frontend' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' , category: 'frontend' },
    { icon: <SiBootstrap />, name: 'Bootstrap' , category: 'frontend' },
    { icon: <SiSass />, name: 'Sass' , category: 'frontend' },

    //Back-End
    { icon: <DiNodejs />, name: 'Node.js', category: 'backend' },
    { icon: <SiNestjs />, name: 'Nest.js' , category: 'backend' },
    { icon: <SiSocketdotio />, name: 'Socket.io' , category: 'backend' },
    { icon: <SiMysql />, name: 'MySQL', category: 'backend'  },
    { icon: <DiMongodb />, name: 'MongoDB' , category: 'backend' },
    { icon: <SiExpress />, name: 'Express', category: 'backend'  },
    { icon: <SiGraphql />, name: 'GraphQL', category: 'backend'  },
    //Tools
    { icon: <SiGithub />, name: 'Github', category: 'tools' },
    { icon: <SiGitlab />, name: 'Gitlab' ,category: 'tools'},
    { icon: <SiFigma />, name: 'Figma' , category: 'tools'},
    { icon: <SiPostman />, name: 'Postman', category: 'tools' },
    { icon: <SiVercel />, name: 'Vercel', category: 'tools' },
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <ErrorBoundary>
      <div className={styles.techSkillsContainer}>
        <motion.div 
          className={styles.categories}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.skillsGrid}
          layout
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={styles.skillCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50,
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className={styles.iconWrapper}>
                  <motion.div 
                    className={styles.skillIcon}
                    animate={{
                      rotateY: hoveredSkill === skill.name ? 360 : 0
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {skill.icon}
                  </motion.div>
                </div>
                <motion.h3 className={styles.skillName}>
                  {skill.name}
                </motion.h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </ErrorBoundary>
  );
};

export default TechSkills;
