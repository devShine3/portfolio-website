import { Container, Row, Col } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import '../styles/About.css'; // Import your custom CSS for styling

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="about-section py-5 position-relative overflow-hidden">
      {/* Decorative elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="about-bg-shape-1"></div>
        <div className="about-bg-shape-2"></div>
      </div>
      
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <motion.h2 
                className="mb-4 text-center section-title"
                variants={itemVariants}
              >
                <span className="highlight-text">About</span> Me
              </motion.h2>
              
              <motion.div 
                className="tech-stack mb-4"
                variants={itemVariants}
              >
                {['Python', 'Django', 'MERN Stack', 'Odoo', 'ERP', 'Data Analysis', 'System Optimization'].map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </motion.div>
              
              <motion.p 
                className="lead mb-4 about-text"
                variants={itemVariants}
              >
                Versatile <strong>IT Professional</strong> with experience in software development (<span className="highlight">Python</span>, <span className="highlight">Django</span>, <span className="highlight">MERN Stack</span>), <span className="highlight">ERP customization</span> (Odoo), and IT support.
              </motion.p>
              
              <motion.p 
                className="about-text"
                variants={itemVariants}
              >
                Strong <span className="highlight">problem-solving</span> skills with a <span className="highlight">customer-focused</span> approach. Passionate about <span className="highlight">full-stack development</span>, <span className="highlight">data analysis</span>, and <span className="highlight">system optimization</span>.
              </motion.p>
              
              <motion.p 
                className="about-text"
                variants={itemVariants}
              >
                Adept at collaborating in <span className="highlight">team environments</span> and leading <span className="highlight">operational tasks</span> efficiently.
              </motion.p>
              
              <motion.div 
                className="text-center mt-5"
                variants={itemVariants}
              >
                <div className="signature">HTET AUNG SHINE</div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
