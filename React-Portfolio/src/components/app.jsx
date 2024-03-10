
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Header'
import '../styles/App.css'
import Home from './Home/Home'
import ProjectGallery from './ProjectGallery/ProjectGallery';
import projectsData from '../projects.json';
import Project from './Project'
import ContactForm from './Contact/ContactForm';
import '../styles/global.css';

const App =() => {

return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-gallery" element={<ProjectGallery projects={projectsData} />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
      );
};

export default App;