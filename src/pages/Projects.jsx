import { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
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
                    rel="noreferrer"
                    className="me-2"
                  >
                    <FaGithub className="me-1" /> Code
                  </Button>
                  {project.liveLink && (
                    <Button
                      variant="primary"
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt className="me-1" /> Demo
                    </Button>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        {filteredProjects.length === 0 && (
          <p className="text-center text-muted mt-4 mb-0">
            No projects found for this filter.
          </p>
        )}
      </Container>
    </section>
  );
};

export default Projects;
