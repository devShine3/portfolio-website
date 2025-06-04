// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaPython, FaNodeJs, FaDatabase, 
  FaGitAlt, FaGithub, FaGitlab,
  FaCode, FaServer, FaTools, FaBrain, FaLaptopCode, FaUsers
} from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMongodb, SiExpress, SiOdoo } from 'react-icons/si';
import { GiThink, GiNetworkBars } from 'react-icons/gi';
import '../styles/Skills.css';

const Skills = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="category-icon" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="category-icon" />,
      skills: [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Django", icon: <SiDjango />, color: "#092E20" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#000000" }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" }
      ]
    },
    {
      title: "ERP & Tools",
      icon: <FaTools className="category-icon" />,
      skills: [
        { name: "Odoo", icon: <SiOdoo />, color: "#714B67" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "GitLab", icon: <FaGitlab />, color: "#FCA121" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "XML", icon: <FaCode />, color: "#0060AC" }
      ]
    },
    {
      title: "Other Technical Skills",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "Problem-Solving", icon: <GiThink />, color: "#4B6A9B" },
        { name: "API Integration", icon: <GiNetworkBars />, color: "#5E35B1" }
      ]
    },
    {
      title: "IT & Soft Skills",
      icon: <FaUsers className="category-icon" />,
      skills: [
        { name: "IT Troubleshooting", icon: <FaTools />, color: "#D32F2F" },
        { name: "System Maintenance", icon: <FaServer />, color: "#0288D1" },
        { name: "Team Leadership", icon: <FaUsers />, color: "#689F38" },
        { name: "Communication", icon: <FaBrain />, color: "#7B1FA2" },
        { name: "Analytical Thinking", icon: <GiThink />, color: "#0097A7" },
        { name: "Customer Support", icon: <FaUsers />, color: "#5D4037" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="highlight-text">Technical</span> Skills
        </motion.h2>

        <motion.div
          className="skills-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              variants={item}
            >
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
