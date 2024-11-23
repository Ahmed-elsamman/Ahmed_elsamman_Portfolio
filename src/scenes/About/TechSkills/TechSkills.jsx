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

import s from './TechSkills.module.scss';

const TechSkills = () => {
  const techSkills = [
    //fron-End
    { icon: <SiNextDotJs />, name: 'Next.js' },
    { icon: <DiReact />, name: 'React' },
    { icon: <SiAngular />, name: 'Angular' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <DiJavascript1 />, name: 'JavaScript' },
    { icon: <SiRedux />, name: 'Redux' },

    { icon: <SiMui />, name: 'Material UI' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiBootstrap />, name: 'Bootstrap' },
    { icon: <SiSass />, name: 'Sass' },

    //Back-End
    { icon: <DiNodejs />, name: 'Node.js' },
    { icon: <SiNestjs />, name: 'Nest.js' },
    { icon: <SiSocketdotio />, name: 'Socket.io' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <DiMongodb />, name: 'MongoDB' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiGraphql />, name: 'GraphQL' },
    //Tools
    { icon: <SiGithub />, name: 'Github' },
    { icon: <SiGitlab />, name: 'Gitlab' },
    { icon: <SiFigma />, name: 'Figma' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <SiVercel />, name: 'Vercel' },
  ];
  return (
    <ul className={s.container}>
      {techSkills.map(({ icon, name }) => (
        <li className={s.techIcon}>
          {icon}
          <p className={s.techName}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default TechSkills;
