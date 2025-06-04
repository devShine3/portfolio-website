/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <h2 className="section-title text-center mb-5">
            My <span className="highlight">Projects</span>
          </h2>

          {/* Filter Buttons */}
          <div className="text-center mb-4">
            {['all', 'Python', 'Django', 'React', 'Odoo'].map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? 'primary' : 'outline-primary'}
                size="sm"
                className="me-2 mb-2"
                onClick={() => setFilter(tag)}
              >
                {tag === 'all' ? 'All' : tag}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <Row className="g-4">
            {filteredProjects.map((project) => (
              <Col key={project.id} lg={4} md={6}>
                <motion.div variants={item}>
                  <Card className="h-100 project-card">
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      alt={project.title} 
                    />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <div className="mb-3">
                        {project.tags.map((tag) => (
                          <Badge key={tag} bg="secondary" className="me-2">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                    <Card.Footer className="bg-transparent">
                      <Button
                        variant="outline-primary"
                        href={project.githubLink}
                        target="_blank"
                        className="me-2"
                      >
                        <FaGithub className="me-1" /> Code
                      </Button>
                      {project.liveLink && (
                        <Button
                          variant="primary"
                          href={project.liveLink}
                          target="_blank"
                        >
                          <FaExternalLinkAlt className="me-1" /> Demo
                        </Button>
                      )}
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
