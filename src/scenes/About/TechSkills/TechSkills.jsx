import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiSwift } from '@react-icons/all-files/di/DiSwift';
import { SiExpo } from '@react-icons/all-files/si/SiExpo';
import { SiFirebase } from '@react-icons/all-files/si/SiFirebase';
import { SiJest } from '@react-icons/all-files/si/SiJest';
import { SiKotlin } from '@react-icons/all-files/si/SiKotlin';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiSocketDotIo } from '@react-icons/all-files/si/SiSocketDotIo';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiTypescript />
        <p className={s.techName}>TypeScript</p>
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
        <p className={s.techName}>JavaScript</p>
      </li>
      <li className={s.techIcon}>
        <DiSwift />
        <p className={s.techName}>Swift</p>
      </li>
      <li className={s.techIcon}>
        <SiKotlin />
        <p className={s.techName}>Kotlin</p>
      </li>
      <li className={s.techIcon}>
        <DiReact />
        <p className={s.techName}>React</p>
      </li>
      <li className={s.techIcon}>
        <SiRedux />
        <p className={s.techName}>Redux</p>
      </li>
      <li className={s.techIcon}>
        <SiFirebase />
        <p className={s.techName}>Firebase</p>
      </li>
      <li className={s.techIcon}>
        <SiSocketDotIo />
        <p className={s.techName}>Socket.io</p>
      </li>
      <li className={s.techIcon}>
        <SiExpo />
        <p className={s.techName}>Expo</p>
      </li>
      <li className={s.techIcon}>
        <DiGit />
        <p className={s.techName}>Git</p>
      </li>
      <li className={s.techIcon}>
        <SiJest />
        <p className={s.techName}>Jest</p>
      </li>
      <li className={s.techIcon}>
        <BsTerminalFill />
        <p className={s.techName}>Terminal</p>
      </li>
    </ul>
  );
};

export default TechSkills;
