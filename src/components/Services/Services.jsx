import React, { useState } from 'react';
import './Services.scss';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal/ServiceModal';
import khamsat from '../../../src/assets/freelancePlatform/khamsat.png';
import mostaqel from '../../../src/assets/freelancePlatform/mostaqel.png';
import nafezly from '../../../src/assets/freelancePlatform/nafezly.jpg';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: 'Frontend Development',
      icon: <FaCode className="service-icon" />,
      description: 'Creating beautiful, responsive, and interactive user interfaces using modern web technologies.',
      skills: ['React', 'Angular', 'Next.js', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="service-icon" />,
      description: 'Building robust server-side applications and APIs to power your web applications.',
      skills: ['Node.js', 'Nest', 'RESTful APIs', 'GraphQL', 'Express']
    },
    {
      title: 'Full Stack Development',
      icon: <FaDatabase className="service-icon" />,
      description: 'End-to-end development combining frontend and backend expertise for complete solutions.',
      skills: ['Full Stack Apps', 'Database Design', 'System Architecture',  'Web Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>My Services</h2>
        <p>Specialized solutions to bring your ideas to life</p>
      </motion.div>
      
      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleServiceClick(service)}
          >
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="skills-container">
              {service.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            <button className="contact-btn">Contact Me</button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="connect-platforms"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="connect-header ">Connect With Me On Freelance Platforms</h3>
        <div className="platform-links">
          <motion.a 
            href="https://nafezly.com/u/ahmed_elsamman"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="platform-link nafezly"
          >
            <img src={nafezly} alt="Nafezly" />
            <span>Nafezly Profile</span>
          </motion.a>
          <motion.a 
            href="https://khamsat.com/user/ahmed_elsamman"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="platform-link khamsat"
          >
            <img src={khamsat} alt="Khamsat" />
            <span>Khamsat Profile</span>
          </motion.a>
          
          <motion.a 
            href="https://mostaql.com/u/Ahmed_Elsamman1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="platform-link mostaql"
          >
            <img src={mostaqel} alt="Mostaql" />
            <span>Mostaql Profile</span>
          </motion.a>
        </div>
      </motion.div>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedService={selectedService?.title}
      />
    </div>
  );
};

export default Services;