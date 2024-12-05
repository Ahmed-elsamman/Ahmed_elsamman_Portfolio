import React, { useState } from 'react';
import './Services.scss';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal/ServiceModal';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: 'Frontend Development',
      icon: <FaCode className="service-icon" />,
      description: 'Creating beautiful, responsive, and interactive user interfaces using modern web technologies.',
      skills: ['React', 'ِAngular', 'Next.js', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Backend Development',
      icon: <FaServer className="service-icon" />,
      description: 'Building robust server-side applications and APIs to power your web applications.',
      skills: ['Node.js', 'Nest', 'RESTful APIs', 'GraphQL ', 'Express']
    },
    {
      title: 'Full Stack Development',
      icon: <FaDatabase className="service-icon" />,
      description: 'End-to-end development combining frontend and backend expertise for complete solutions.',
      skills: ['Full Stack Apps', 'Database Design', 'System Architecture', 'DevOps','web Design']
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h2>My Services</h2>
        <p>Specialized solutions to bring your ideas to life</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            className="service-card" 
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleServiceClick(service.title)}
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
      </div>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedService={selectedService}
      />
    </div>
  );
};

export default Services;
