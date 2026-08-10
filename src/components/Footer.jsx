import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/Sujeet-Pawar",
      color: "#ff6b35" // Neon Orange
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/sujeetpawar",
      color: "#ffd23f" // Bright Yellow
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:sujeetpawar@email.com",
      color: "#ff8c00" // Orange
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Sujeet Pawar</h3>
            <p className="footer-description">
              CSE AI/ML Student & Full-Stack Developer passionate about creating 
              innovative solutions that bridge AI and real-world applications.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ color: social.color }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    className="footer-link"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <p>📧 sujeetpawar@email.com</p>
              <p>📱 +91 XXXXX XXXXX</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 Sujeet Pawar. All rights reserved.</p>
          </div>
          <div className="footer-built">
            <p>Built with React.js & ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
