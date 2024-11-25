import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import { FaWhatsapp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Tilt from 'react-parallax-tilt';
import avatar from '../../../assets/avatar.svg';
import samman_logo from '../../../assets/saman_logo.svg';
import s from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a <b>Full Stack Developer</b> with a creative
              mindset and <br />a drive for building exceptional
              digital experiences.
            </p>

            <p>
              My expertise spans across{' '}
              <i>
                <b className={s.purple}>
                  Frontend Development, Backend Architecture, and
                  Cloud Solutions
                </b>
              </i>
              <br />
              transforming complex challenges into elegant,
              user-centric applications.
            </p>

            <p>
              I specialize in crafting robust web applications using{' '}
              <i>
                <b className={s.purple}>
                  React, Next.js, Angular, Node.js, Nest , and Modern
                  Cloud Technologies
                </b>
              </i>
              <br />
              while maintaining a keen eye for UI/UX design principles
              and performance optimization.
            </p>

            <p>
              My passion lies in{' '}
              <i>
                <b className={s.purple}>
                  Innovation, Clean Architecture, and Scalable
                  Solutions
                </b>
              </i>
              <br />
              always staying ahead of industry trends and best
              practices.
            </p>
          </div>
        </div>
        <div className={s.avatarContainer}>
          <Tilt trackOnWindow={true}>
            <LazyLoadImage
              alt="avatar"
              effect="blur"
              src={samman_logo}
              className={s.avatar}
            />
          </Tilt>
        </div>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>Feel free to connect with me</p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/Ahmed-elsamman"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/ahmed.elsamman.71"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/snaichuk_v"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/ahmed-elsamman-599a2215b"
              target="_blank"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://wa.me/201116123202"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="whatsapp"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
