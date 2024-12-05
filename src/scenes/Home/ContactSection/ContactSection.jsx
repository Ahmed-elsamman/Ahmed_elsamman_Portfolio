import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactSection.scss';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const form = useRef();

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
        setStatus({ type: '', message: '' });
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div 
      className="contact-section"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
      {status.message && <p className={status.type}>{status.message}</p>}
    </motion.div>
  );
};

export default ContactSection;
