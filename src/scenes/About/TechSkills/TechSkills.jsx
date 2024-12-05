import React, { useEffect, useState, Suspense } from 'react';
import TagCloud from 'TagCloud';
import styles from './TechSkills.module.scss';
import { motion } from 'framer-motion';
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


const LoadingSpinner = () => (
  <div className={styles.loading}>
    <div className={styles.spinner}></div>
  </div>
);

const TechSkills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cloudError, setCloudError] = useState(null);

  const skills = [

    // ******************************
    { icon: <SiNextDotJs />, name: 'Next.js' ,category: 'frontend'},
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

  useEffect(() => {
    let cloudInstance = null;

    const initializeTagCloud = async () => {
      try {
        const container = '.tagcloud';
        const texts = skills.map(skill => skill.name);

        const options = {
          radius: 250,
          maxSpeed: 'fast',
          initSpeed: 'fast',
          direction: 135,
          keep: true,
          useContainerInlineStyles: false
        };

        cloudInstance = TagCloud(container, texts, options);
        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing TagCloud:', error);
        setCloudError(error);
        setIsLoading(false);
      }
    };

    initializeTagCloud();

    return () => {
      if (cloudInstance && typeof cloudInstance.destroy === 'function') {
        cloudInstance.destroy();
      }
    };
  }, []);

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    language: 'Programming Languages',
    tools: 'Development Tools'
  };

  if (cloudError) {
    return (
      <div className={styles.errorMessage}>
        <h3>Failed to load skills visualization</h3>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className={styles.skillsSection}>
        <h2 className={styles.title}>Technical Skills</h2>
        
        <div className={styles.content}>
          <Suspense fallback={<LoadingSpinner />}>
            <div className={styles.sphereContainer}>
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <>
                  <div className="tagcloud"></div>
                  <div className={styles.glowOrb}></div>
                </>
              )}
            </div>
          </Suspense>

          {/* <div className={styles.categoriesContainer}>
            {Object.entries(categories).map(([key, title]) => (
              <motion.div 
                key={key}
                className={styles.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3>{title}</h3>
                <div className={styles.skillsList}>
                  {skills
                    .filter(skill => skill.category === key)
                    .map((skill) => (
                      <motion.div 
                        key={skill.name}
                        className={styles.skillItem}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className={styles.icon}>{skill.icon}</span>
                        <span className={styles.name}>{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default TechSkills;
