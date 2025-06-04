import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="hero-section py-5 position-relative overflow-hidden">
      {/* Animated background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="hero-bg-shape-1"></div>
        <div className="hero-bg-shape-2"></div>
      </div>

      <Container className="text-center position-relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h1 className="mb-4 hero-title" variants={item}>
            <span className='text-danger'>Hi,</span>{' '}
            <span className='text-dark'>I'm</span>{' '}
            <span className='text-info highlight-name'>HTET AUNG SHINE</span>
          </motion.h1>

          <motion.p className="lead mb-4 text-muted" variants={item}>
            Full Stack Developer | Odoo Specialist | IT Professional
          </motion.p>

          <motion.div
            className="d-flex justify-content-center align-items-center gap-3 mb-4"
            variants={item}
          >
            <a href="https://github.com/devShine3" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub className="fs-3" />
            </a>
            <a href="https://www.linkedin.com/in/htet-aung-shine-813822233/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin className="fs-3" />
            </a>
            <a href="https://www.facebook.com/htetag.shine.71/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook className="fs-3" />
            </a>
          </motion.div>

          <motion.div variants={item}>
            <Button
              as="a" // Use 'as' prop to render as an anchor tag
              href="/HTETAUNGSHINE.pdf" // Link to the resume file
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              download="HTET_AUNG_SHINE_RESUME.pdf" // Download attribute
              variant="dark"
              size="lg"
              className="hero-btn fw-bold px-4 py-3"
            >
              <FaDownload className="me-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Home;
