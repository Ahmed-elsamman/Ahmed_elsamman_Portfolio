import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';

const ProjectCard = ({ id, image, title, description, index }) => {
  const location = useLocation();

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }
    },
    hover: {
      scale: 1.02,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.li 
      className={s.card}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ perspective: 1000 }}
    >
      <div className={s.cardWrapper}>
        <Link to={`/project/${id}`} state={{ background: location }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <LazyLoadImage
              alt={title}
              effect="blur"
              src={image.src[0]}
              width="100%"
              style={{ minHeight: '10rem' }}
              placeholderSrc={image.placeholderSrc}
            />
          </motion.div>
        </Link>

        <motion.div 
          className={s.cardBody}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </motion.div>
      </div>
    </motion.li>
  );
};

export default ProjectCard;
