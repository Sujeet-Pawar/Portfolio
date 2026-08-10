import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/pfp.jpg';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 className="hero-title">
              Hi, I'm{' '}
              <span className="text-gradient">Sujeet Pawar</span>
            </motion.h1>
            
            <motion.p className="hero-subtitle" variants={itemVariants}>
              AI/ML Enthusiast | Full-Stack Developer | Innovator
            </motion.p>
            
            <motion.p className="hero-description" variants={itemVariants}>
              Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning. 
              Passionate about creating innovative solutions that bridge the gap between AI and real-world applications.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="View my featured projects"
            >
              View Projects
            </motion.a>
              
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Get in touch with me"
            >
              Contact Me
            </motion.a>
            </motion.div>
            
            <motion.div className="hero-social" variants={itemVariants}>
              <a 
                href="https://github.com/Sujeet-Pawar" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/sujeet-pawar-85a615295" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with me on LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:sujeetpawar998@gmail.com"
                aria-label="Send me an email"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="hero-profile">
              <div className="profile-image-container">
                <div className="profile-image">
                  <img 
                    src={profileImage} 
                    alt="Sujeet Pawar" 
                    className="profile-img"
                  />
                </div>
                <div className="profile-glow"></div>
              </div>
              
              <div className="hero-card">
                <div className="hero-card-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> developer</span>
                    <span className="code-operator"> = </span>
                    <span className="code-string">"Sujeet"</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">let</span>
                    <span className="code-variable"> branch</span>
                    <span className="code-operator"> = </span>
                    <span className="code-string">"CSE AI/ML"</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> Skills</span>
                    <span className="code-operator"> = [</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-string">"AI/ML"</span>
                    <span className="code-operator">,</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-string">"React.js"</span>
                    <span className="code-operator">,</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-string">"Python"</span>
                  </div>
                  <div className="code-line indent">
                    <span className="code-string">"Full-Stack"</span>
                  </div>
                  <div className="code-line">
                    <span className="code-operator">]</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
