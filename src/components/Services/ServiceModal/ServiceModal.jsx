import React, { useState, useRef, useEffect } from 'react';
import './ServiceModal.scss';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const ServiceModal = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const form = useRef();

  useEffect(() => {
    emailjs.init("P-l4MZt8BHfErYZBf");
    setFormData(prev => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await emailjs.sendForm(
        'service_j52lhlc',
        'template_73yl2ex',
        form.current,
        'P-l4MZt8BHfErYZBf'
      );

      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setTimeout(() => {
        onClose();
        setStatus({ type: '', message: '' });
        setFormData({ name: '', email: '', message: '', service: '' });
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="modal-overlay"
      variants={modalVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
    >
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Contact for {selectedService} Development</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="hidden" name="service" value={selectedService} />
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>
          <button 
            type="submit" 
            className={`submit-button ${status.type === 'loading' ? 'loading' : ''}`}
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ServiceModal;
