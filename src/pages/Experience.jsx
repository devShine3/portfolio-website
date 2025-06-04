// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/Experience.css'; // Create this CSS file

const Experience = () => {
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
    <section id="experiences" className="experience-section py-5 position-relative">
      {/* Background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div className="experience-bg-shape"></div>
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
            <span className="highlight-text">Professional</span> Experience
          </motion.h2>

          <div className="experience-timeline">
            {/* Experience 1 */}
            <motion.div 
              className="experience-item"
              variants={item}
            >
              <div className="experience-header">
                <div className="experience-badge">2022-2024</div>
                <h3 className="experience-position">Odoo Developer</h3>
                <p className="experience-company">Myanmar Information Technology</p>
              </div>
              <div className="experience-content">
                <ul className="experience-list">
                  <li>Developed and customized Odoo ERP modules (Workshop Fleet, Hotel Management System)</li>
                  <li>Built backend logic with Python, Django, and PostgreSQL</li>
                  <li>Designed dynamic reports and dashboards using XML, JavaScript, and QWeb</li>
                  <li className="tech-tags">
                    <span>Python</span>
                    <span>Django</span>
                    <span>Odoo</span>
                    <span>PostgreSQL</span>
                    <span>JavaScript</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div 
              className="experience-item"
              variants={item}
            >
              <div className="experience-header">
                <div className="experience-badge">2022</div>
                <h3 className="experience-position">Developer Intern</h3>
                <p className="experience-company">Myanmar Information Technology</p>
              </div>
              <div className="experience-content">
                <ul className="experience-list">
                  <li>Customized Odoo modules to meet client requirements</li>
                  <li>Collaborated on feature implementation and issue resolution</li>
                  <li>Documented processes and provided technical support</li>
                  <li>Developed Python skills through hands-on projects</li>
                  <li className="tech-tags">
                    <span>Python</span>
                    <span>Odoo</span>
                    <span>ERP</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Experience 3 */}
            <motion.div 
              className="experience-item"
              variants={item}
            >
              <div className="experience-header">
                <div className="experience-badge">2021-2022</div>
                <h3 className="experience-position">IT Support Specialist</h3>
                <p className="experience-company">Kangle (Kyan Sit Min)</p>
              </div>
              <div className="experience-content">
                <ul className="experience-list">
                  <li>Provided technical support for hardware, software, and network issues</li>
                  <li>Managed company social media platforms</li>
                  <li>Assisted marketing teams with digital tools and campaigns</li>
                  <li className="tech-tags">
                    <span>Technical Support</span>
                    <span>Networking</span>
                    <span>Social Media</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
