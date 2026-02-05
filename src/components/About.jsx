import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
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

  const interests = [
    {
      icon: <FaBrain />,
      title: "AI/ML Research",
      description: "Exploring cutting-edge machine learning algorithms and neural networks"
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: <FaRocket />,
      title: "Hackathons & Innovation",
      description: "Participating in hackathons and creating innovative solutions"
    },
    {
      icon: <FaGraduationCap />,
      title: "Problem Solving",
      description: "Passionate about solving real-world problems with technology"
    }
  ];

  const stats = [
    { number: "7+", label: "Projects Completed" },
    { number: "CSE", label: "AI/ML Branch" },
    { number: "15+", label: "Technologies Mastered" },
    { number: "100%", label: "Passion Driven" }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm Sujeet Pawar, a passionate Computer Science Engineering student specializing in 
              <span className="highlight-text"> Artificial Intelligence & Machine Learning</span>. My journey in technology is driven by 
              curiosity and a commitment to creating innovative solutions that make a real impact.
            </p>
            <p>
              I specialize in developing intelligent systems using Python, JavaScript, and modern 
              frameworks. My expertise spans across AI/ML projects, full-stack development, and 
              participating in hackathons to solve real-world problems.
            </p>
            <p>
              From building AI-powered adaptive learning platforms to creating hand gesture 
              recognition systems, I love exploring the intersection of machine learning and 
              practical applications. When I'm not coding, you'll find me working on new projects 
              or contributing to innovative solutions.
            </p>
          </motion.div>

          <motion.div className="interests" variants={itemVariants}>
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="interest-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="interest-icon">
                  {interest.icon}
                </div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="stats" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
