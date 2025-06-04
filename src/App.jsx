import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="dark" />
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  return (
    <><div className="content">

      <Router>
        <Header />
        <main className="py-4">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </div>
    </>
  );
}

export default App;
