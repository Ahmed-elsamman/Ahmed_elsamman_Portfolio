import s from './ModalProjectCard.module.scss';
import projects from '../../../data/projects';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/modalHook';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, description, links, technologies } =
    projects.find((p) => id === p.id);
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={s.modalContent}>
        <div className={s.cardWrapper}>
          <div className={s.cardHeader}>
            <h3 className={s.title}>{title}</h3>
            <div className={s.buttonGroup}>
              {links.LiveSite && (
                <Button
                  className="primary"
                  href={links.LiveSite}
                  target="_blank"
                >
                  <BiLinkExternal /> &nbsp; Live Site
                </Button>
              )}
              {links.Repo && (
                <Button
                  className="primary"
                  href={links.Repo}
                  target="_blank"
                >
                  <BiLinkExternal /> &nbsp; Github
                </Button>
              )}
            </div>
          </div>

          <div className={s.contentContainer}>
            <div className={s.swiperContainer}>
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                className={s.swiper}
              >
                {image.src.map((img, index) => (
                  <SwiperSlide key={index}>
                    <LazyLoadImage
                      alt={`project-img-${index}`}
                      src={img}
                      effect="blur"
                      className={s.slideImage}
                      placeholderSrc={image.placeholderSrc}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={s.projectInfo}>
              <div className={s.description}>{description}</div>
              <div className={s.technologies}>
                <h4>Technologies Used:</h4>
                <div className={s.techList}>
                  {technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
