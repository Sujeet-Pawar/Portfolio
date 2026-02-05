import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      id: 1,
      title: "AI-Powered Adaptive Learning Platform",
      description: "An intelligent learning platform that adapts to individual learning styles and pace using machine learning algorithms.",
      technologies: ["Python", "Machine Learning", "React.js", "MongoDB"],
      category: "AI/ML",
      github: "adaptive-learning-platform",
      features: [
        "Personalized learning paths",
        "Adaptive content delivery",
        "Progress tracking and analytics",
        "Real-time performance optimization"
      ]
    },
    {
      id: 2,
      title: "Plant Care Chatbot (Image + Text)",
      description: "An AI-powered chatbot that helps users identify plant diseases and provides care recommendations using image recognition.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
      category: "AI/ML",
      github: "plant-care-chatbot",
      features: [
        "Image-based plant disease detection",
        "Natural language processing",
        "Care recommendations",
        "Interactive chat interface"
      ]
    },
    {
      id: 3,
      title: "Online Attendance System (PHP)",
      description: "A comprehensive attendance management system built with PHP for educational institutions.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      category: "Web Development",
      github: "attendance-system",
      features: [
        "Student and teacher management",
        "Automated attendance tracking",
        "Report generation",
        "Admin dashboard"
      ]
    },
    {
      id: 4,
      title: "College Festival Website (MERN + OTP)",
      description: "A full-stack festival management website with OTP authentication and event management features.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "Web Development",
      github: "festival-website",
      features: [
        "OTP-based authentication",
        "Event registration and management",
        "Real-time updates",
        "Responsive design"
      ]
    },
    {
      id: 5,
      title: "Air Pollution Monitoring (Cloud-Edge Hybrid)",
      description: "A hybrid cloud-edge system for real-time air pollution monitoring and data analysis.",
      technologies: ["Python", "IoT", "Cloud Computing", "Data Analytics"],
      category: "IoT/AI",
      github: "air-pollution-monitoring",
      features: [
        "Real-time sensor data collection",
        "Cloud-based data processing",
        "Predictive analytics",
        "Mobile app integration"
      ]
    },
    {
      id: 6,
      title: "Hand Gesture Recognition (MediaPipe)",
      description: "A real-time hand gesture recognition system using MediaPipe for interactive applications.",
      technologies: ["Python", "MediaPipe", "OpenCV", "Machine Learning"],
      category: "AI/ML",
      github: "hand-gesture-recognition",
      features: [
        "Real-time gesture detection",
        "Multiple gesture support",
        "High accuracy recognition",
        "Interactive applications"
      ]
    },
    {
      id: 7,
      title: "Travel App Prototype",
      description: "A mobile application prototype for travel planning with AI-powered recommendations and itinerary management.",
      technologies: ["React Native", "Python", "Machine Learning", "API Integration"],
      category: "Web Development",
      github: "travel-app-prototype",
      features: [
        "AI-powered recommendations",
        "Itinerary planning",
        "Budget tracking",
        "Social features"
      ]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    // Focus management for accessibility
    setTimeout(() => {
      const modal = document.querySelector('.modal-content');
      if (modal) {
        modal.focus();
      }
    }, 100);
  };

  const closeModal = () => {
    setSelectedProject(null);
    // Return focus to the trigger element
    const activeElement = document.activeElement;
    if (activeElement && activeElement.classList.contains('project-card')) {
      activeElement.focus();
    }
  };


  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          
          <motion.div className="projects-grid" variants={itemVariants}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(project)}
                transition={{ duration: 0.2 }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title} project`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(project);
                  }
                }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={`https://github.com/sujeetpawar/${project.github}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                      Code
                    </a>
                    <button 
                      className="project-link learn-more"
                      aria-label={`Learn more about ${project.title}`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                closeModal();
              }
            }}
          >
            <button 
              className="modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className="modal-body">
              <h2 id="modal-title" className="modal-title">{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-features">
                <h3>Key Features:</h3>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-technologies">
                <h3>Technologies Used:</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="modal-links">
                <a 
                  href={`https://github.com/sujeetpawar/${selectedProject.github}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
