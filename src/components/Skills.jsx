import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaJs, FaNodeJs, FaGitAlt, FaDatabase, FaCode, FaBrain } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Languages",
      icon: <FaPython />,
      color: "#ff6b35",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "PHP", icon: <FaCode /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "C", icon: <FaCode /> }
      ]
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      color: "#ffd23f",
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "Vite", icon: <FaCode /> },
        { name: "HTML", icon: <FaCode /> },
        { name: "CSS", icon: <FaCode /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      color: "#ff8c00",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      color: "#ff6b35",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <FaDatabase /> }
      ]
    },
    {
      title: "AI/ML",
      icon: <FaBrain />,
      color: "#ffd23f",
      skills: [
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "Deep Learning", icon: <FaBrain /> },
        { name: "MediaPipe", icon: <FaCode /> },
        { name: "OpenCV", icon: <FaCode /> }
      ]
    },
    {
      title: "Others",
      icon: <FaCode />,
      color: "#ff8c00",
      skills: [
        { name: "LaTeX", icon: <FaCode /> },
        { name: "Git", icon: <FaGitAlt /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Technologies
          </motion.h2>
          
          <motion.div className="skills-grid" variants={itemVariants}>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="category-header">
                  <div 
                    className="category-icon"
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
