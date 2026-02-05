import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = ({ 
  type = 'text', 
  width = '100%', 
  height = '20px', 
  className = '',
  count = 1 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'text':
        return <div className={`skeleton skeleton-text ${className}`} style={{ width, height }}></div>;
      
      case 'title':
        return <div className={`skeleton skeleton-title ${className}`} style={{ width, height }}></div>;
      
      case 'card':
        return (
          <div className={`skeleton skeleton-card ${className}`} style={{ width, height }}>
            <div className="skeleton skeleton-text" style={{ width: '80%', height: '16px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '60%', height: '14px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '40%', height: '12px' }}></div>
          </div>
        );
      
      case 'project-card':
        return (
          <div className={`skeleton skeleton-project-card ${className}`} style={{ width, height }}>
            <div className="skeleton skeleton-text" style={{ width: '90%', height: '20px', marginBottom: '12px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '100%', height: '14px', marginBottom: '8px' }}></div>
            <div className="skeleton skeleton-text" style={{ width: '80%', height: '14px', marginBottom: '16px' }}></div>
            <div className="skeleton-tags">
              <div className="skeleton skeleton-tag"></div>
              <div className="skeleton skeleton-tag"></div>
              <div className="skeleton skeleton-tag"></div>
            </div>
          </div>
        );
      
      case 'skill-category':
        return (
          <div className={`skeleton skeleton-skill-category ${className}`} style={{ width, height }}>
            <div className="skeleton skeleton-text" style={{ width: '60%', height: '18px', marginBottom: '16px' }}></div>
            <div className="skeleton-skills">
              <div className="skeleton skeleton-skill-item"></div>
              <div className="skeleton skeleton-skill-item"></div>
              <div className="skeleton skeleton-skill-item"></div>
              <div className="skeleton skeleton-skill-item"></div>
            </div>
          </div>
        );
      
      case 'circle':
        return <div className={`skeleton skeleton-circle ${className}`} style={{ width, height }}></div>;
      
      case 'button':
        return <div className={`skeleton skeleton-button ${className}`} style={{ width, height }}></div>;
      
      case 'hero':
        return (
          <section className="skeleton-hero">
            <div className="hero-background">
              <div className="hero-gradient"></div>
              <div className="hero-particles"></div>
            </div>
            <div className="container">
              <div className="skeleton-hero-content">
                <div className="skeleton-hero-text">
                  <div className="skeleton skeleton-title" style={{ width: '70%', height: '64px', marginBottom: '16px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '85%', height: '24px', marginBottom: '16px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '100%', height: '20px', marginBottom: '8px' }}></div>
                  <div className="skeleton skeleton-text" style={{ width: '90%', height: '20px', marginBottom: '32px' }}></div>
                  <div className="skeleton-hero-buttons">
                    <div className="skeleton skeleton-button" style={{ width: '140px', height: '48px' }}></div>
                    <div className="skeleton skeleton-button" style={{ width: '120px', height: '48px' }}></div>
                  </div>
                  <div className="skeleton-hero-social">
                    <div className="skeleton skeleton-circle" style={{ width: '40px', height: '40px' }}></div>
                    <div className="skeleton skeleton-circle" style={{ width: '40px', height: '40px' }}></div>
                    <div className="skeleton skeleton-circle" style={{ width: '40px', height: '40px' }}></div>
                  </div>
                </div>
                <div className="skeleton-hero-visual">
                  <div className="skeleton-hero-profile">
                    <div className="skeleton-profile">
                      <div className="skeleton-profile-img"></div>
                    </div>
                    <div className="skeleton-hero-card">
                      <div className="skeleton-code-line"></div>
                      <div className="skeleton-code-line"></div>
                      <div className="skeleton-code-line"></div>
                      <div className="skeleton-code-line"></div>
                      <div className="skeleton-code-line"></div>
                      <div className="skeleton-code-line"></div>
                      <div className="skeleton-code-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      
      case 'about':
        return (
          <section className="section">
            <div className="container">
              <SkeletonLoader type="title" width="200px" height="48px" className="section-title" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '48px' }}>
                <SkeletonLoader type="card" count={4} />
              </div>
            </div>
          </section>
        );
      
      case 'skills':
        return (
          <section className="section">
            <div className="container">
              <SkeletonLoader type="title" width="300px" height="48px" className="section-title" />
              <div className="skeleton-skills-grid">
                <SkeletonLoader type="skill-category" count={6} />
              </div>
            </div>
          </section>
        );
      
      case 'projects':
        return (
          <section className="section">
            <div className="container">
              <SkeletonLoader type="title" width="250px" height="48px" className="section-title" />
              <div className="skeleton-projects-grid">
                <SkeletonLoader type="project-card" count={6} />
              </div>
            </div>
          </section>
        );
      
      case 'contact':
        return (
          <section className="section">
            <div className="container">
              <SkeletonLoader type="title" width="200px" height="48px" className="section-title" />
              <div className="skeleton-contact-grid">
                <div className="skeleton-contact-info">
                  <SkeletonLoader type="text" width="80%" height="20px" />
                  <SkeletonLoader type="text" width="90%" height="16px" />
                  <SkeletonLoader type="text" width="70%" height="16px" />
                  <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                    <SkeletonLoader type="circle" width="40px" height="40px" />
                    <SkeletonLoader type="circle" width="40px" height="40px" />
                    <SkeletonLoader type="circle" width="40px" height="40px" />
                  </div>
                </div>
                <div className="skeleton-contact-form">
                  <SkeletonLoader type="text" width="100%" height="40px" />
                  <SkeletonLoader type="text" width="100%" height="40px" />
                  <SkeletonLoader type="text" width="100%" height="40px" />
                  <SkeletonLoader type="text" width="100%" height="120px" />
                  <SkeletonLoader type="button" width="140px" height="40px" />
                </div>
              </div>
            </div>
          </section>
        );
      
      default:
        return <div className={`skeleton ${className}`} style={{ width, height }}></div>;
    }
  };

  if (count > 1) {
    return (
      <div className="skeleton-container">
        {Array.from({ length: count }, (_, index) => (
          <React.Fragment key={index}>
            {renderSkeleton()}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return renderSkeleton();
};

export default SkeletonLoader;
