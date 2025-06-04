// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/Education.css'; // Create this CSS file

const Education = () => {
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="education-section py-5 position-relative">
      {/* Background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="education-bg-shape"></div>
      </div>

      <div className="container position-relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 
            className="section-title text-center mb-5"
            variants={item}
          >
            <span className="highlight-text">Education</span> & Certifications
          </motion.h2>

          <div className="education-timeline">
            {/* Education Item 1 */}
            <motion.div 
              className="education-item"
              variants={item}
            >
              <div className="education-card">
                <div className="education-year">2025</div>
                <div className="education-content">
                  <h3 className="education-institution">Edoxi</h3>
                  <p className="education-degree">MERN Full Stack Development (Certification)</p>
                  <div className="education-badges">
                    <span className="badge">JavaScript</span>
                    <span className="badge">React</span>
                    <span className="badge">Node.js</span>
                    <span className="badge">MongoDB</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Item 2 */}
            <motion.div 
              className="education-item"
              variants={item}
            >
              <div className="education-card">
                <div className="education-year">2016</div>
                <div className="education-content">
                  <h3 className="education-institution">National Management College</h3>
                  <p className="education-degree">Diploma in Information Technology</p>
                  <div className="education-badges">
                    <span className="badge">IT Fundamentals</span>
                    <span className="badge">Programming</span>
                    <span className="badge">Systems Analysis</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Item 3 */}
            <motion.div 
              className="education-item"
              variants={item}
            >
              <div className="education-card">
                <div className="education-year">2015</div>
                <div className="education-content">
                  <h3 className="education-institution">Basic Education High School</h3>
                  <p className="education-degree">High School Diploma</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
