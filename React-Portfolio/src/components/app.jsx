
// import Header from './Navbar/Header';
// import Home from './Home';
// import ProjectGallery from './ProjectGallery';
// import Contact from './Contact';
// import Wrapper from './Wrapper';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Header'
import '../styles/App.css'
import Home from './Home/Home'
import ProjectGallery from './ProjectGallery/ProjectGallery';
import projectsData from '../projects.json';
function App (){
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-gallery" element={<ProjectGallery projects={projectsData} />} />
        </Routes>
      </div>
    </Router>
      );
};

export default App;